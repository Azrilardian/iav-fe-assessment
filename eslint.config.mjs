import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

import eslintPluginImport from 'eslint-plugin-import'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,ts,tsx}'],
    plugins: {
      import: eslintPluginImport
    },
    rules: {
      'space-before-function-paren': 0,
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/ban-ts-ignore': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-require-imports': 0,
      'react-hooks/exhaustive-deps': 0,
      'generator-star-spacing': 0,
      indent: 0,
      curly: ['warn', 'multi-line'],
      'multiline-ternary': 0,
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true, // Prevents conflicts with import/order
          ignoreMemberSort: false, // Ensures members like { b, a } are sorted to { a, b }
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true
        }
      ],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 0,
      'import/no-anonymous-default-export': 0,
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before'
            }
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ]
    },
    ignores: [
      '.parcel-cache',
      'dist',
      'node_modules',
      '.vscode',
      'package.json',
      'yarn.lock',
      'yarn-error.log',
      '.husky',
      '.prettierignore',
      '.eslintignore',
      '.gitignore',
      '.docker',
      '.dockerignore',
      'captain-definition',
      'nginx.conf',
      '.env.example'
    ]
  }
]

export default eslintConfig
