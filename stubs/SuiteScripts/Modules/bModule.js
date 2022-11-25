/**
 * @format
 * @module bModule
 * @version 1.0.0
 * @description Your custom NetSuite module B
 * @NApiVersion 2.1
 * @preserve NApiVersion
 * @since 2022.2
 */
(() => {
  /**
   * @name Dependencies
   * @memberof module:bModule
   * @type {Array}
   * @description Array of dependencies the module requires
   * @ignore
   */
  const Dependencies = ['N/log'];
  //AMD & CommonJS compatibility stuff
  // CommonJS
  if (typeof module !== 'undefined' && typeof require !== 'undefined') {
    module.id = '/SuiteScripts/Modules/bModule';
    module.exports = bModule.apply(this, Dependencies.map(require));
    module.exports.mockable = bModule; // module loader with mockable dependencies
  }
  // AMD
  if (typeof define !== 'undefined') {
    define(Dependencies, bModule);
  }
})();

/**
 * @alias module:bModule
 * @description NetSuite module B export function
 * @param {Object} log - NS log module
 */
function bModule(log) {
  /**
   * @name set_CustomFieldValue
   * @description Example set custom body field value for record
   * @function
   * @memberof module:bModule
   * @param {Record} recordObj - NS Record Object to update
   * @return {String}
   */
  const set_CustomFieldValue = (recordObj, newValue) => {};
  return {
    set_CustomFieldValue,
  };
}
