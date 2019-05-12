module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: [
        "airbnb",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "prettier/react",
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: { jsx: true },
    },
    plugins: ["prettier", "react", "jsx-a11y"],
    rules: {
        "import/no-extraneous-dependencies": [2, { devDependencies: true }],
        "jsx-a11y/label-has-associated-control": 0,
        "jsx-a11y/label-has-for": 0,
        "prettier/prettier": [2, { trailingComma: "es5" }],
        "react/prop-types": 0,
    },
};