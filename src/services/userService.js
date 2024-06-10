const { v4: uuidv4 } = require('uuid');
let users = [];

// Criar Usuário
const createUser = (name, email, age) => {
    const user = { id: uuidv4(), name, email, age };
    users.push(user);
    return user;
};

// Obter Usuários
const getUsers = () => {
    return users;
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

module.exports = { 
    createUser,
    getUsers,
    getUserById,
    updateUser
}