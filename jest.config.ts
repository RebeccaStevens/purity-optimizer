/*
 * Jest Config.
 *
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

import { Config as JestConfig } from '@jest/types';

const config: Partial<JestConfig.DefaultOptions> = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'lcov'
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.tests.json'
    }
  },
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node'
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};

export default config;
