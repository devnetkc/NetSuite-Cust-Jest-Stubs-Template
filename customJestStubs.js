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
 * @typedef UseMinified
 * @type {Object}
 * @description Options for loading minified file
 * @property {boolean} value - T/F do you want to use a minified version in define statement
 * @property {String} minName='.min' - Optional alternative post fix identifier to add to file
 */
/**
 * @typedef ExcludeStub
 * @type {Object}
 * @property {String} name - "Directory/Path/ModuleName" -- CustomStub property to use
 * @property {String} path - Path to module for project -- generally you will use `\`${__dirname}/src/FileCabinet\``
 * @property {UseMinified} useMinified - Options for using or not using minified files locally
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
    let stubModuleName = `/SuiteScripts/${filename}`;
    let ext = '.js';
    const Module = {
      module: stubModuleName,
      path: `<rootDir>/node_modules/${PKG_STUBS_PATH}/${CustomStubMap[filename]}`,
    };
    // Loop over array of excludes and link min/non-min to project overrides
    for (const ExcludedModule of exclude) {
      if (RegExp(ExcludedModule.name).test(filename)) continue; //?
      ExcludedModule.useMinified.minName =
        ExcludedModule.useMinified.hasOwnProperty('minName')
          ? ExcludedModule.useMinified.minName
          : '.min';
      const ModuleNameMinified = `${ExcludedModule.name}${ExcludedModule.useMinified.minName}`;
      if (
        ExcludedModule.name !== stubModuleName &&
        ModuleNameMinified !== stubModuleName
      )
        continue;
      if (ExcludedModule.useMinified.value) {
        Module.path = ExcludedModule.path.replace(
          ExcludedModule.useMinified.minName,
          ''
        );
        break;
      }
      stubModuleName = stubModuleName.replace(
        ExcludedModule.useMinified.minName,
        ''
      );
      Module.path = ExcludedModule.path + stubModuleName + ext;
      break;
    }
    return Module;
  });

module.exports = {
  customStubs,
};
