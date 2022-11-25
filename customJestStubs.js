/** @format
 * @name CustomJestStubs
 * @description Template for creating custom stubs for your NetSuite custom modules
 * @since 2022.2
 * @exports customStubs
 */
/**
 * @typedef CustomStub
 * @type {Object}
 * @property {String} name - "Directory/Path/ModuleName" -- CustomStub property to use
 * @property {String} path - Pre-path to module for project -- generally returned as `\`<rootDir>/node_modules/${PKG_STUBS_PATH}/${CustomStubMap[filename]}.js\``
 * @description Array of module names and paths to use for them in the stubs package
 */
/**
 * @typedef ExcludeStub
 * @type {Object}
 * @property {String} name - "Directory/Path/ModuleName" -- CustomStub property to use
 * @property {String} path - Path to module for project -- generally you will use `\`${__dirname}/src/FileCabinet\``
 * @description Array of module names and paths to use for them in the stubs package
 */
/**
 * @typedef ModuleStub
 * @type {Object}
 * @property {String} "Directory/Path/ModuleName" - Relative path to module (within src/FileCabinet/SuiteScripts/)"
 * @description Object property/value pair for naming a module and the path for Jest to load it from.
 * @summary Use un-minified named modules for your minified dependencies by using the non-minified path for the named
 * modules.  For example, `Modules/aModules.min` can load `Modules/aModules` without issues, but is easier to debug/test with.
 */
/**
 * @name CustomStubMap
 * @type {ModuleStub[]}
 * @description Array of modules stubs to define
 */
const CustomStubMap = {
  'Modules/aModule': 'Modules/aModule',
  'Modules/aModule.min':
    'Modules/aModule' /*  Note we are not loading min for stubs */,
  'Modules/bModule': 'Modules/bModule',
  'Modules/bModule.min':
    'Modules/bModule' /*  Note we are not loading min for stubs */,
};
/**
 * @name PKG_STUBS_PATH
 * @type {String}
 * @description Path to project within `node_modules` directory
 * @summary This is the path used for loading custom stubs from the package.  Update this value to match your stubs npm package name.
 */
const PKG_STUBS_PATH =
  '@vnetwork-solutions/ns-custom-stubs-template/stubs/SuiteScripts';

/**
 * @name  customStubMap
 * @description Converts CustomStubMap to Jest customStub array type
 * @function
 * @param  {ExcludeStub[]} exclude - Array of named modules to override path location for
 * @return {CustomStub[]}
 */
const customStubs = exclude =>
  Object.keys(CustomStubMap).map(filename => {
    const StubModuleName = `/SuiteScripts/${filename}`;
    let stubPath = `<rootDir>/node_modules/${PKG_STUBS_PATH}/${CustomStubMap[filename]}.js`;
    const Exclude = exclude.filter(
      moduleObj => moduleObj.name === StubModuleName
    );
    if (Exclude.length > 0) stubPath = `${Exclude[0].path}${StubModuleName}`;
    return {
      module: StubModuleName,
      path: stubPath,
    };
  });

module.exports = {
  customStubs,
};
