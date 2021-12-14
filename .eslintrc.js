module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'next/core-web-vitals',
    'standard',
    "next/babel"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
