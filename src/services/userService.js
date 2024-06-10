const { v4: uuidv4 } = require('uuid');
let users = [];

const createUser = (name, email, age) => {
    const user = { id: uuidv4(), name, email, age };
    users.push(user);
    return user;
};

module.exports = { createUser }