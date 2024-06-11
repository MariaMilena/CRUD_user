const { v4: uuidv4 } = require('uuid');
let users = [];
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
const getUserById = (id) => {
    return users.find(u => u.id === id);
};

// Atualizar Usuário
const updateUser = (id, name, email, age) => {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return null;
    }
    const updatedUser = { id, name, email, age };
    users[userIndex] = updatedUser;
    return updatedUser;
};

// Deletar Usuário
const deleteUser = (id) => {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return false;
    }
    users.splice(userIndex, 1);
    return true;
};

module.exports = { 
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}