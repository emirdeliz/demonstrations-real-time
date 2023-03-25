import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig';

module.exports = {
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
