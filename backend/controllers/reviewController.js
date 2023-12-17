const db = require('../models/index.js');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

exports.createProductReview = catchAsyncErrors(async(req, res, next) => {

    const { antraste, turinys, data, ar_pranesta, reitingas, reitingu_kiekis, anonimiskumas, Produktasid_Produktas, Vartotojasid_Vartotojas } = req.body;

    try {

        const atsiliepimas = {
            antraste: antraste,
            turinys: turinys,
            anonimiskumas: anonimiskumas,
            Vartotojasid_Vartotojas: Vartotojasid_Vartotojas,
            //Vartotojasid_Vartotojas: req.user._id,
            Produktasid_Produktas:Produktasid_Produktas
        }

        const atsiliepimoPaieska = await db.Atsiliepimai.findAll({
            where: { Produktasid_Produktas: Produktasid_Produktas },
        });
        //const produktas = await db.Produktai.findByPk(Produktasid_Produktas)

        const isReviewed = atsiliepimoPaieska.find(
            r => r.Vartotojasid_Vartotojas.toString() === req.user._id.toString()
        )

        if (isReviewed) {
            const existingReview = atsiliepimoPaieska.find(
                r => r.Vartotojasid_Vartotojas.toString() === req.user._id.toString()
            );
        
            // Update the existing review properties
            await existingReview.update({
                antraste: antraste,
                turinys: turinys,
                data: data,
                ar_pranesta: ar_pranesta,
                reitingas: reitingas,
                reitingu_kiekis: reitingu_kiekis,
                anonimiskumas: anonimiskumas,
            });
        
            // Respond with the updated review information
            res.status(200).json({
                success: true,
                sukurtasAtsiliepimas: {
                    antraste: antraste,
                    turinys: turinys,
                    data: data,
                    reitingas: reitingas,
                    reitingu_kiekis: reitingu_kiekis,
                    anonimiskumas: anonimiskumas,
                },
            });
        } else {
            // Create a new review and respond with the information
            const sukurtasAtsiliepimas = await db.Atsiliepimai.create(atsiliepimas);
        
            res.status(201).json({
                success: true,
                sukurtasAtsiliepimas: {
                    antraste: antraste,
                    turinys: turinys,
                    data: data,
                    reitingas: reitingas,
                    reitingu_kiekis: reitingu_kiekis,
                    anonimiskumas: anonimiskumas,
                },
            });
        }


    } catch (error) {
        console.error('Error registering a review:', error);
        next(new ErrorHandler(error.message, 500));
    }

    
});