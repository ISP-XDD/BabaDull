const db = require('../models/index.js');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { vartotojo_vardas, slaptazodis, vardas, pavarde, el_pastas, adresas, id_Role } = req.body;

    try {
        // Check if the role exists
        const role = await db.Roles.findByPk(id_Role);
        if (!role) {
            return next(new ErrorHandler('Invalid role ID', 400));
        }

        // Check if the user with the provided email already exists
        const existingUser = await db.Vartotojai.findOne({ where: { el_pastas } });
        if (existingUser) {
            return next(new ErrorHandler('User with this email already exists', 400));
        }

       //Create a new user and hash the password
        const vartotojas = await db.Vartotojai.create({
            vartotojo_vardas: vartotojo_vardas,
            slaptazodis: slaptazodis,
            vardas: vardas,
            pavarde: pavarde,
            el_pastas: el_pastas,
            adresas: adresas,
            id_Role: id_Role,
        })
        
        // Respond with the user information (excluding the password)
        res.status(201).json({
            success: true,
            vartotojas: {
                vartotojo_vardas: vartotojas.vartotojo_vardas,
                vardas: vartotojas.vardas,
                pavarde: vartotojas.pavarde,
                el_pastas: vartotojas.el_pastas,
                adresas: vartotojas.adresas,
                id_Role: vartotojas.id_Role,
            },
        });
        
    } catch (error) {
        console.error('Error registering user:', error);
        next(new ErrorHandler(error.message, 500));
    }
});