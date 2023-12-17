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