import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import i18nextPlugin from "eslint-plugin-i18next";

export default tseslint.config(
  { ignores: ["dist", "*.config.ts", "*.config.js", "scripts/**", "tests/**", "validate-components.ts", "validate-style.ts"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: process.cwd(),
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react": reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
      "i18next": i18nextPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Disallow literal UI strings in JSX. Allow numbers and a curated whitelist.
      "react/jsx-no-literals": [
        "error",
        {
          noStrings: true,
          ignoreProps: false,
          noAttributeStrings: true,
          allowedStrings: [
            "OK",
            "Ok",
            "URL",
            "API",
            "ID",
            "ms",
            "KB",
            "MB",
            "GB"
          ],
        },
      ],
      // i18n guardrail: ensure strings are translated via t() or <Trans />. Do not allow literals in markup or attributes (including aria-*)
      "i18next/no-literal-string": [
        "error",
        {
          markupOnly: false,
          onlyAttribute: false,
          validateTemplate: true,
          // allow calling these wrappers
          ignoreCallee: ["t", "i18n.t"],
          // don't ignore aria-* so we enforce translations there too
          ignoreAttribute: [
            // technical attrs we can ignore
            "id",
            "key",
            "htmlFor",
            "className",
            "data-testid",
            "data-testId",
            "data-test",
            "testId",
            "role"
          ],
          // allow these functions/components to contain text
          components: ["Trans"],
        },
      ],
      // A11y rules
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/label-has-associated-control": ["error", { assert: "either" }],
      "jsx-a11y/control-has-associated-label": ["error"],
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/interactive-supports-focus": "warn",
      "jsx-a11y/no-autofocus": ["warn", { ignoreNonDOM: true }],
      "jsx-a11y/no-static-element-interactions": "warn",

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "vars": "all",
          "args": "after-used",
          "ignoreRestSiblings": true,
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          "allowShortCircuit": true,
          "allowTernary": true,
          "allowTaggedTemplates": true
        }
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "no-case-declarations": "warn",
      "no-prototype-builtins": "warn",
      "no-unreachable": "error",
      "no-dead-code": "off", // TypeScript handles this
    },
  },
  {
    files: ["src/lib/storageUtils.ts", "**/*.test.{ts,tsx}", "src/**/*.test.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": "off",
      // During tests we relax i18n literal checks to reduce friction when building fixtures
      "i18next/no-literal-string": "off",
      "react/jsx-no-literals": "off"
    }
  }
);
