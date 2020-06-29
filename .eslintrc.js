module.exports = {
    "env": {
        "es2020": true,
        "mocha": true,
        "node": true
    },
    "extends": ["eslint:recommended", "airbnb-base"],
    "parserOptions": {
        "ecmaVersion": 11
    },
    "ignorePatterns": ["node_modules/**"],
    "rules": {
        'camelcase': 'warn',
        'func-names': 'off',
        'indent': 'off',
        'max-len': 'off',
        'no-trailing-spaces': 'warn',
        'no-console': 'error',
        'no-unused-vars': 'off',
        'vars-on-top':'error'
    }
};
