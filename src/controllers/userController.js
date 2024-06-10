const { validateUser } = require('../validations/userValidation');
const userService = require('../services/userService');

const createUser = (req, res) => {
    const { name, email, age } = req.body;

    const errors = validateUser(name, email, age);
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    const user = userService.createUser(name, email, age);
    res.status(201).json(user);
};

const getUsers = (req, res) => {
    const users = userService.getUsers();
    res.json(users);
};

const getUserById = (req, res) => {
    const { id } = req.params;
    const user = userService.getUserById(id);
    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json(user);
};

module.exports = { 
    createUser,
    getUsers,
    getUserById
}