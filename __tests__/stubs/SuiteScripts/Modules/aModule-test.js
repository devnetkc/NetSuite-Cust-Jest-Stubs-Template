/**
 * @format
 * @module customModule_CS-test
 */

import log from 'N/log';
import query from 'N/query';
import aModule from '/SuiteScripts/Modules/aModule';
import aModuleMin from '/SuiteScripts/Modules/aModule.min';

jest.mock('N/log');
jest.mock('N/query');

beforeEach(() => {
  jest.clearAllMocks();
});
// eslint-disable-next-line import/no-amd
describe('aModule.js Stub Tests', () => {
  // * GIVEN
  const VendorId = '1234';
  describe('GetVendorPrefix method should ', () => {
    test('Return undefined without errors', () => {
      // * WHEN
      const VendorPrefix = aModule.GetVendorPrefix(VendorId);
      // * THEN
      expect(VendorPrefix).toBeUndefined();
      expect(jest.fn(() => VendorPrefix)).not.toThrow(Error);
    });
  });
  describe('RunQuery method should', () => {
    test('Return empty object without errors', () => {
      // * WHEN
      const QueryResult = aModule.RunQuery(VendorId);
      // * THEN
      expect(QueryResult).toBeUndefined();
      expect(jest.fn(() => QueryResult)).not.toThrow(Error);
    });
  });
});
// * GIVEN
describe('aModule.min.js Stub Tests', () => {
  // * GIVEN
  const VendorId = '4321';
  describe('GetVendorPrefix method should ', () => {
    test('Return undefined without errors', () => {
      // * WHEN
      const VendorPrefix = aModuleMin.GetVendorPrefix(VendorId);
      // * THEN
      expect(VendorPrefix).toBeUndefined();
      expect(jest.fn(() => VendorPrefix)).not.toThrow(Error);
    });
  });
  describe('GetVendorPrefix method should ', () => {
    test('Return undefined without errors', () => {
      // * WHEN
      const VendorPrefix = aModuleMin.GetVendorPrefix(VendorId);
      // * THEN
      expect(VendorPrefix).toBeUndefined();
      expect(jest.fn(() => VendorPrefix)).not.toThrow(Error);
    });
  });
});
