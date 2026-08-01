import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
	// Global ignores first
	{
		ignores: [
			'**/node_modules/**',
			'**/.DS_Store',
			'build/**',
			'.svelte-kit/**',
			'package/**',
			'**/.env',
			'**/.env.*',
			'**/pnpm-lock.yaml',
			'**/package-lock.json',
			'**/yarn.lock'
		]
	},

	// Base JS configuration
	{
		files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.svelte'],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2020
			}
		}
	},

	// JS recommended rules
	{
		files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.svelte'],
		rules: js.configs.recommended.rules
	},

	// TS files configuration (TS specific parser and plugin setup)
	{
		files: ['**/*.ts', '**/*.svelte'],
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2020,
				extraFileExtensions: ['.svelte']
			}
		},
		rules: {
			...tsPlugin.configs.recommended.rules
		}
	},

	// TS recommended overrides from eslint-recommended (only for TS files, NOT Svelte files)
	{
		files: ['**/*.ts'],
		rules: tsPlugin.configs['eslint-recommended'].overrides[0].rules
	},

	// Svelte configuration using the flat config from eslint-plugin-svelte
	...sveltePlugin.configs['flat/recommended'],

	// Configure parser for Svelte files so that typescript-eslint parser is used for typescript scripts
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser,
				sourceType: 'module',
				ecmaVersion: 2020
			}
		}
	},

	// Custom rules and formatting overrides
	{
		files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.svelte'],
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: {
			// Custom rule preservations
			'no-console': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-unused-vars': 'error',

			// Turn off formatting rules that conflict with prettier
			...prettierConfig.rules
		}
	}
];
