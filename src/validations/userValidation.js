// Função de validação de email
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Função de validação de usuário
const validateUser = (name, email, age) => {
    const errors = [];

    if (!name || typeof name !== 'string') {
        errors.push('Nome inválido');
    }

    if (!isValidEmail(email)) {
        errors.push('Email inválido');
    }

    if (!Number.isInteger(age) || age <= 0) {
        errors.push('Idade deve ser um número positivo');
    }

    return errors;
};

module.exports = { validateUser };
