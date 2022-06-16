module.exports = {
    env: {
        browser: true,
        es2021: true,
        commonjs: true,
    },
    extends: ['plugin:react/recommended', 'eslint:recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
        ecmaVersion: 'latest',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {},
    ignorePatterns: ['src/**/*.css'],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
