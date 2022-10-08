/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      'compiler': 'ttypescript',
    }
  },
  transform: {
    '.(ts|tsx)':['ts-jest'],
  },
  setupFiles: [
    './jest-config.ts',
  ]
};