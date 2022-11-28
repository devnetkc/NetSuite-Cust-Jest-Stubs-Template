/**
 * @format
 * @module customModule_CS-test
 */

import customJestStubs from '../customJestStubs';

beforeEach(() => {
  jest.clearAllMocks();
});
// eslint-disable-next-line import/no-amd
describe('customJestStubs.js Tests', () => {
  describe('customStubs method should ', () => {
    describe('ExcludeStubs param', () => {});
    // * GIVEN
    test('return an array when passed empty array', () => {
      // * GIVEN
      const ExcludeStubs = [];
      // * WHEN
      const CustomStubsList = customJestStubs.customStubs(ExcludeStubs);
      // * THEN
      expect(CustomStubsList).toEqual(expect.any(Array));
      expect(jest.fn(() => CustomStubsList)).not.toThrow(Error);
    });
    test('throw an error if NOT given an array', () => {
      // * GIVEN
      const ExcludeStubs = {};
      // * THEN
      expect(jest.fn(() => customJestStubs.customStubs(ExcludeStubs))).toThrow(
        'EXCLUDED_STUBS_TYPEERROR'
      );
    });
    describe('useMinified is false', () => {
      test('return array with excluded module path instead of stub path', () => {
        // * GIVEN
        const ExcludeStubs = [
          {
            name: '/SuiteScripts/Modules/aModule',
            path: `<rootDir>/src/FileCabinet`,
            useMinified: {
              value: false,
            },
          },
        ];
        const ExpectedResult = [
          {
            module: '/SuiteScripts/Modules/aModule',
            path: `<rootDir>/src/FileCabinet/SuiteScripts/Modules/aModule.js`,
          },
          {
            module: '/SuiteScripts/Modules/aModule.min',
            path: `<rootDir>/src/FileCabinet/SuiteScripts/Modules/aModule.js`,
          },
          {
            module: '/SuiteScripts/Modules/bModule',
            path: `<rootDir>/node_modules/@vnetwork-solutions/ns-custom-stubs-template/stubs/SuiteScripts/Modules/bModule`,
          },
          {
            module: '/SuiteScripts/Modules/bModule.min',
            path: `<rootDir>/node_modules/@vnetwork-solutions/ns-custom-stubs-template/stubs/SuiteScripts/Modules/bModule`,
          },
        ];
        // * WHEN
        const CustomStubsList = customJestStubs.customStubs(ExcludeStubs);
        // * THEN
        expect(CustomStubsList).toEqual(expect.arrayContaining(ExpectedResult));
      });
    });
    describe('useMinified is true', () => {
      /*   test.todo(
        'should return array with minified excluded module path instead of stub path '
      ); */
      test('return array with excluded module path instead of stub path', () => {
        // * GIVEN
        const ExcludeStubs = [
          {
            name: '/SuiteScripts/Modules/aModule',
            path: `<rootDir>/src/FileCabinet`,
            useMinified: {
              value: true,
            },
          },
          {
            name: '/SuiteScripts/Modules/bModule.min',
            path: `<rootDir>/src/FileCabinet`,
            useMinified: {
              value: false,
            },
          },
        ];
        const ExpectedResult = [
          {
            module: '/SuiteScripts/Modules/aModule',
            path: `<rootDir>/src/FileCabinet/SuiteScripts/Modules/aModule.js`,
          },
          {
            module: '/SuiteScripts/Modules/aModule.min',
            path: `<rootDir>/src/FileCabinet/SuiteScripts/Modules/aModule.min.js`,
          },
          {
            module: '/SuiteScripts/Modules/bModule',
            path: `<rootDir>/node_modules/@vnetwork-solutions/ns-custom-stubs-template/stubs/SuiteScripts/Modules/bModule`,
          },
          {
            module: '/SuiteScripts/Modules/bModule.min',
            path: `<rootDir>/src/FileCabinet/SuiteScripts/Modules/bModule.js`,
          },
        ];
        // * WHEN
        const CustomStubsList = customJestStubs.customStubs(ExcludeStubs);
        // * THEN
        expect(CustomStubsList).toEqual(expect.arrayContaining(ExpectedResult));
      });
    });
  });
});
