const db = require('../models/index.js');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken.js');

// Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { vartotojo_vardas, slaptazodis, vardas, pavarde, el_pastas, adresas, fk_id_Role } = req.body;

    try {
        // Check if the role exists
        const role = await db.Roles.findByPk(fk_id_Role);
        if (!role) {
            return next(new ErrorHandler('Invalid role ID', 400));
        }

        // Check if the user with the provided email already exists
        const existingUser = await db.Vartotojai.findOne({ where: { el_pastas } });
        if (existingUser) {
            return next(new ErrorHandler('User with this email already exists', 400));
        }

       //Create a new user and hash the password
        const user = await db.Vartotojai.create({
            vartotojo_vardas: vartotojo_vardas,
            slaptazodis: slaptazodis,
            vardas: vardas,
            pavarde: pavarde,
            el_pastas: el_pastas,
            adresas: adresas,
            fk_id_Role: fk_id_Role,
        })

        sendToken(user, 200, res)
        
    } catch (error) {
        console.error('Error registering user:', error);
        next(new ErrorHandler(error.message, 500));
    }
});

//Login user => /api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { el_pastas, slaptazodis } = req.body;

    // Check if email and password is entered by user
    if (!el_pastas || !slaptazodis) {
        return next(new ErrorHandler('Please enter email & password', 400));
    }

    // Finding user in database
    const user = await db.Vartotojai.findOne({ where: { el_pastas } });

    if (!user) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    // Check if password is correct
    const isPasswordMatched = await user.comparePassword(slaptazodis);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    sendToken(user, 200, res)
});

// Forgot Password => /api/v1/password/forgot
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await db.Vartotojai.findOne({ where: { el_pastas: req.body.el_pastas } });

    if (!user) {
        return next(new ErrorHandler('User not found with this email', 404));
    }

    // Get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // Create reset password url
    const resetUrl = `${req.protocol}://${req.get('host')}/password/reset/${resetToken}`;

    const message = `Jūsų slaptažodžio nustatymo iš naujo prieigos raktas yra toks:\n\n${resetUrl}\n\nJei neprašėte šio el. laiško, ignoruokite jį.`

    try {

        await sendEmail({
            email: user.el_pastas,
            subject: 'BabaDull Slaptažodžio Atgavimas',
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.el_pastas}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));
    }
});

// Reset Password => /api/v1/password/reset/:token
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    // Hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await db.Vartotojai.findOne({
        where: {
            resetPasswordToken,
            resetPasswordExpire: { [$gt]: Date.now() }
        }
    });

    if (!user) {
        return next(new ErrorHandler('Slaptažodžio nustatymo iš naujo prieigos raktas neteisingas arba pasibaigęs', 400))
    }

    if (req.body.slaptazodis !== req.body.confirmPassword) {
        return next(new ErrorHandler('Slaptažodžiai nesutampa', 400))
    }

    // Setup the new password
    user.slaptazodis = req.body.slaptazodis;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res)
});

//Get currently logged in user details => /api/v1/me
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const user = await db.Vartotojai.findByPk(req.user.id_Vartotojas);

    res.status(200).json({
        success: true,
        user
    })
})

// Update / Change password => /api/v1/password/update
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await db.Vartotojai.findByPk(req.user.id_Vartotojas);

    // Check previous user password
    const isMatched = await user.comparePassword(req.body.oldPassword);
    if (!isMatched) {
        return next(new ErrorHandler('Senas slaptažodis neteisingas', 400));
    }

    user.slaptazodis = req.body.password;
    await user.save();

    sendToken(user, 200, res)
});

//Update user profile => /api/v1/me/update
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        vardas: req.body.vardas,
        pavarde: req.body.pavarde,
        el_pastas: req.body.el_pastas,
        adresas: req.body.adresas,
    }

    const user = await db.Vartotojai.update(newUserData, { where: { id_Vartotojas: req.user.id_Vartotojas } });

    res.status(200).json({
        success: true,
    })
});

//Logout user => /api/v1/logout
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
});

//Admin Routes

//Get all users => /api/v1/admin/users
exports.allUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await db.Vartotojai.findAll();

    res.status(200).json({
        success: true,
        users
    })
})

//Get user details => /api/v1/admin/user/:id
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await db.Vartotojai.findByPk(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`User does not exist with id: ${req.params.id}`));
    }

    res.status(200).json({
        success: true,
        user
    })
})

//Update user profile => /api/v1/admin/user/update/:id
// exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
//     const newUserData = {
//         vardas: req.body.vardas,
//         pavarde: req.body.pavarde,
//         el_pastas: req.body.el_pastas,
//         adresas: req.body.adresas,
//     }

//     const user = await db.Vartotojai.update(newUserData, { where: { id_Vartotojas: req.user.id_Vartotojas } });

//     res.status(200).json({
//         success: true,
//     })
// });
