module.exports = {
    root: true,

    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        es6: true,
    },

    env: {
        browser: true,
        es2021: true,
        node: true,
        'vue/setup-compiler-macros': true,
    },

    extends: [
        // https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
        'eslint:recommended',

        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
        'plugin:@typescript-eslint/recommended',


        // https://github.com/vuejs/eslint-plugin-vue
        'plugin:vue/vue3-recommended',
    ],

    // required to lint *.vue files
    plugins: [
        'vue',
        'import',
        '@typescript-eslint',
    ],

    globals: {
        ga: 'readonly', // Google Analytics
        cordova: 'readonly',
        __statics: 'readonly',
        __QUASAR_SSR__: 'readonly',
        __QUASAR_SSR_SERVER__: 'readonly',
        __QUASAR_SSR_CLIENT__: 'readonly',
        __QUASAR_SSR_PWA__: 'readonly',
        process: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly',
        YT: 'readonly',
        $trans: 'readonly',
        $t: 'readonly',
    },

    // add your custom rules here
    rules: {
        // resetting no-undef since it is set to off by 'plugin:@typescript-eslint/recommended'
        'no-undef': [ 'error' ],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],

        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 0,
                switchCase: 1,
                ignores: [],
            },
        ],

        // allow single-word components
        'vue/multi-word-component-names': 0,
        'vue/custom-event-name-casing': 'off',

        indent: [
            'error',
            4,
            {
                'SwitchCase': 1,
            },
        ],

        'semi': [
            'error',
            'always',
        ],

        'max-len': [
            'error',
            {
                'code': 120,
                'tabWidth': 4,
            },
        ],

        'max-lines': [
            'error',
            {
                'max': 300,
                'skipBlankLines': true,
                'skipComments': true,
            },
        ],

        'comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'never',
                'exports': 'never',
                'functions': 'never',
            },
        ],

        // allow async-await
        'generator-star-spacing': 'off',

        // allow paren-less arrow functions
        'arrow-parens': 'off',
        'one-var': 'off',

        'import/first': 'off',
        'import/named': 'off',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',

        // allow console and debugger during development
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

        'space-infix-ops': 'error',
        'no-case-declarations': 0,
        'brace-style': [ 'error', 'stroustrup', { allowSingleLine: true } ],

        // allow re-throwing of error in try catch
        'no-useless-catch': 'off',

        // array multilines and ensure formatting is applied
        'array-bracket-spacing': [ 'error', 'always' ],

        // this rule, if on, would require explicit return type on the `render` function
        '@typescript-eslint/explicit-function-return-type': 'off',

        // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule
        // so it has to be disabled
        '@typescript-eslint/no-var-requires': 'off',

        '@typescript-eslint/no-explicit-any': 'warn',


        // quotes handling
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],

        'vue/max-attributes-per-line': [ 'error', { singleline: { max: 1 }, multiline: { max: 1 } } ],
        'object-curly-spacing': [ 'warn', 'always' ],
        '@typescript-eslint/member-delimiter-style': [
            'warn',
            {
                multiline: {
                    delimiter: 'none',
                },
                singleline: {
                    delimiter: 'comma',
                    requireLast: false,
                },
            },
        ],
    },
};
