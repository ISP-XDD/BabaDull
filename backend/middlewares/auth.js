const db = require('../models/index.js');

const catchAsyncErrors = require('./catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');
const jwt = require('jsonwebtoken');

//Checks if user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token} = req.cookies;
    if(!token){
        return next(new ErrorHandler('Login first to access this resource.', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await db.Vartotojai.findByPk(decoded.id);

    next();
});

//Handling users roles
exports.authorizeRoles = (...roles) => {
    return catchAsyncErrors(async (req, res, next) => {
        try {
            const userRole = await db.Roles.findByPk(req.user.fk_id_Role);

            if (!userRole) {
                return next(new ErrorHandler(`Role (${req.user.fk_id_Role}) not found.`, 500));
            }

            if (!roles.includes(userRole.Pavadinimas)) {
                return next(new ErrorHandler(`Role (${userRole.Pavadinimas}) is not allowed to access this resource.`, 403));
            }

            next();
        } catch (error) {
            return next(new ErrorHandler('Internal Server Error', 500));
        }
    });
};