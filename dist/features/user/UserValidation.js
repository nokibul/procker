"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const validateBody = (body) => {
    const errors = [];
    if (typeof body.name !== 'string') {
        errors.push('Name is required.');
    }
    if (body.name.trim() === '') {
        errors.push('Name must be a non-empty string.');
    }
    if (typeof body.email !== 'string') {
        errors.push('Email is required.');
    }
    if (!isValidEmail(body.email)) {
        errors.push('Email is invalid');
    }
    if (errors.length > 0) {
        throw new Error(errors.join(' '));
    }
    return body;
};
exports.validateBody = validateBody;
//# sourceMappingURL=UserValidation.js.map