const Vartotojas = require('../models/vartotojas');
const Role = require('../models/role');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

// Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { vartotojo_vardas, vardas, pavarde, el_pastas, slaptazodis, role_id } = req.body;

    try {
        // Check if the role exists
        const role = await Role.findByPk(role_id);
        if (!role) {
            return next(new ErrorHandler('Invalid role ID', 400));
        }

        // Check if the user with the provided email already exists
        const existingUser = await Vartotojas.findOne({ where: { el_pastas } });
        if (existingUser) {
            return next(new ErrorHandler('User with this email already exists', 400));
        }

        // Create a new user and hash the password
        const vartotojas = await Vartotojas.create({
            vartotojo_vardas,
            vardas,
            pavarde,
            el_pastas,
            slaptazodis,
            role_id,
        });

        // Respond with the user information (excluding the password)
        res.status(201).json({
            success: true,
            vartotojas: {
                id: vartotojas.vart_id,
                vartotojo_vardas: vartotojas.vartotojo_vardas,
                vardas: vartotojas.vardas,
                pavarde: vartotojas.pavarde,
                el_pastas: vartotojas.el_pastas,
                role_id: vartotojas.role_id,
            },
        });
    } catch (error) {
        console.error('Error registering user:', error);
        next(new ErrorHandler('Internal Server Error', 500));
    }
});