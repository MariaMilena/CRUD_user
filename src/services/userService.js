const User = require('../models/userModels');

// Criar Usuário
const createUser = async (userData) => {
    return await User.create(userData);
};

// Obter Usuários
const getUsers = async () => {
    return await User.findAll();
};

// Obter Usuário por ID
const getUserById = async (id) => {
    return await User.findByPk(id);
};

// Atualizar Usuário
const updateUser = async (id, userData) => {
    const user = await User.findByPk(id);
    if (user) {
        return await user.update(userData);
    }
};

// Deletar Usuário
const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (user) {
        await user.destroy();
        return true;
    }
    return false;
};

module.exports = { 
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}