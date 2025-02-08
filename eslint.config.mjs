import pluginJs from '@eslint/js'
import recommendedConfig from 'eslint-plugin-prettier/recommended'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  recommendedConfig,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.ts', '.js', '.tsx', '.jsx'] }],
      'prettier/prettier': 'error',
      'react/prop-types': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
]
