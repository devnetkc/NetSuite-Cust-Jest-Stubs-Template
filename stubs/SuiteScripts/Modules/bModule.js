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
   * @param {Object} options - Object of parameters for setting custom body field
   * @param {Record} options.currentRecord - NS Record Object to update
   * @param {String} options.fieldId - Field id on record object to update value on
   * @param {String} options.value - Value to set record field to
   * @return {undefined}
   */
  const set_CustomFieldValue = options => {};
  return {
    set_CustomFieldValue,
  };
}
