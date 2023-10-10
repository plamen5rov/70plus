function validateEmail(str) {
    return (str.includes('@')
        && str.includes('.')
        && str[0] !== '@');
}

module.exports = validateEmail;
