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

module.exports = { 
    createUser,
    getUsers 
}