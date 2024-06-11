const { validateUser } = require('../validations/userValidation');
const userService = require('../services/userService');

const createUser = async (req, res) => {
    const { name, email, age } = req.body;

    const errors = validateUser(name, email, age);
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    const user = await userService.createUser(req.body);
    return res.status(200).json(user);
};

const getUsers = async (req, res) => {
    const users = await userService.getUsers();
    res.json(users);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json(user);
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const errors = validateUser(name, email, age);
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    const updatedUser = await userService.updateUser(id, req.body);
    if (!updatedUser) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json(updatedUser);
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const success = await userService.deleteUser(id);
    if (!success) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.status(204).send();
};

module.exports = { 
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}