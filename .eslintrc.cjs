module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'jsx-quotes': ['warn', 'prefer-single'], //COMILLAS SIMPLE EN JSX REACT
    'quotes': ['warn', 'single'], //USAR COMILLAS SIMPLES ''
    'semi': ['warn', 'never'], //NO USAR PUNTO Y COMA ;
    'indent': ['warn', 2], //USAR DOS ESPACIOS COMO TAB
    'eqeqeq': ['warn'], //USAR SIEMPRE IGUALDAD ESTRICTA ===
    'comma-dangle': ['warn', 'always-multiline'], //SIEMPRE PONER COMA ADICIONAL AL FINAL DE LAS LISTAS
    // 'no-console': ['warn'], //NO DEJAR CONSOLE.LOG TIRADOS
  },
}
