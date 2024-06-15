const { z } = require('zod');

const validateUser = z.object({
    name: z.string(),
    email: z.string().email(),
    age: z.number().int().positive(),
});

module.exports = validateUser;
