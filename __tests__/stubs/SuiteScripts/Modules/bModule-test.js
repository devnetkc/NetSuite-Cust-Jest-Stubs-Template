/**
 * @format
 * @module customModule_CS-test
 */

import log from 'N/log';
import record from 'N/record';
import bModule from '/SuiteScripts/Modules/bModule';
import bModuleMin from '/SuiteScripts/Modules/bModule.min';

jest.mock('N/log');
jest.mock('N/record');

beforeEach(() => {
  jest.clearAllMocks();
});
// eslint-disable-next-line import/no-amd
describe('bModule.js Stub Tests', () => {
  describe('set_CustomFieldValue method should ', () => {
    // * GIVEN
    const Record = new record.Record();
    const Options = {
      fieldId: 'custbody_example-id-1',
      currentRecord: Record,
      value: '1234',
    };
    test('Return undefined without errors', () => {
      // * WHEN
      const ValueSet = bModule.set_CustomFieldValue(Options);
      // * THEN
      expect(ValueSet).toBeUndefined();
      expect(jest.fn(() => ValueSet)).not.toThrow(Error);
    });
  });
});
describe('bModule.min.js Stub Tests', () => {
  describe('set_CustomFieldValue method should ', () => {
    // * GIVEN
    const Record = new record.Record();
    const Options = {
      fieldId: 'custbody_example-id-1',
      currentRecord: Record,
      value: '1234',
    };
    test('Return undefined without errors', () => {
      // * WHEN
      const ValueSet = bModuleMin.set_CustomFieldValue(Options);
      // * THEN
      expect(ValueSet).toBeUndefined();
      expect(jest.fn(() => ValueSet)).not.toThrow(Error);
    });
  });
});
