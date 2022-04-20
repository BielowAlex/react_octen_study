import Joi from "joi";

Joi.object({
    model: Joi.string().min(2).max(20).required().messages({
        'string.empty': 'Поле не може бути пустим!',
        'string.min': 'Мінімум 2 символи!',
        'string.max': 'Максимум 20 символів!'
    }),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})