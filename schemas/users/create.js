import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().min(3).max(10).required().alphanum().messages({
        "string.base": "El nombre tiene que ser alfanumérico"
    }),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi
        .string()
        .min(8)
        .pattern(new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,30}$'))
        .required()
        .messages({
            "string.min": "La contraseña debe tener mínimo 8 caracteres",
            "string.pattern.base": "La contraseña debe incluir letras, números y al menos un carácter especial (!@#$%^&*)",
        }),
    photo: joi.string().required(),
    country: joi.string().required(),
})

export default schema