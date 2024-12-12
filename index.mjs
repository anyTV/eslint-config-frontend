import vue from "eslint-plugin-vue";
import _import from "eslint-plugin-import";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import parser from "vue-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
), {
    plugins: {
        vue,
        import: fixupPluginRules(_import),
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            ...vue.environments["setup-compiler-macros"]["setup-compiler-macros"],
            ga: "readonly",
            cordova: "readonly",
            __statics: "readonly",
            __QUASAR_SSR__: "readonly",
            __QUASAR_SSR_SERVER__: "readonly",
            __QUASAR_SSR_CLIENT__: "readonly",
            __QUASAR_SSR_PWA__: "readonly",
            process: "readonly",
            Capacitor: "readonly",
            chrome: "readonly",
            YT: "readonly",
            $trans: "readonly",
            $t: "readonly",
        },

        parser: parser,
        ecmaVersion: 5,
        sourceType: "commonjs",

        parserOptions: {
            parser: "@typescript-eslint/parser",
            es6: true,
        },
    },

    rules: {
        "no-undef": ["error"],

        "vue/html-indent": ["error", 4, {
            attribute: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],

        "vue/script-indent": ["error", 4, {
            baseIndent: 0,
            switchCase: 1,
            ignores: [],
        }],

        "vue/multi-word-component-names": 0,
        "vue/custom-event-name-casing": "off",

        indent: ["error", 4, {
            SwitchCase: 1,
        }],

        semi: ["error", "always"],

        "max-len": ["error", {
            code: 120,
            tabWidth: 4,
        }],

        "max-lines": ["error", {
            max: 300,
            skipBlankLines: true,
            skipComments: true,
        }],

        "comma-dangle": ["error", {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "never",
            exports: "never",
            functions: "never",
        }],

        "generator-star-spacing": "off",
        "arrow-parens": "off",
        "one-var": "off",
        "import/first": "off",
        "import/named": "off",
        "import/namespace": "error",
        "import/default": "error",
        "import/export": "error",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies": "off",
        "no-console": "warn",
        "no-alert": "warn",
        "no-debugger": "warn",
        "space-infix-ops": "error",
        "no-case-declarations": 0,

        "brace-style": ["error", "stroustrup", {
            allowSingleLine: true,
        }],

        "no-useless-catch": "off",
        "array-bracket-spacing": ["error", "always"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": "warn",

        quotes: ["error", "single", {
            avoidEscape: true,
            allowTemplateLiterals: true,
        }],

        "vue/max-attributes-per-line": ["error", {
            singleline: {
                max: 1,
            },

            multiline: {
                max: 1,
            },
        }],

        "object-curly-spacing": ["warn", "always"],

        "@typescript-eslint/member-delimiter-style": ["warn", {
            multiline: {
                delimiter: "none",
            },

            singleline: {
                delimiter: "comma",
                requireLast: false,
            },
        }],
    },
}];
