/**
 * @format
 * @name JestConfig
 * @description Jest config file for project
 * @exports BuildJestConfig
 */

const SuiteCloudJestConfiguration = require('@oracle/suitecloud-unit-testing/jest-configuration/SuiteCloudJestConfiguration');
const cliConfig = require('./suitecloud.config');

const SuiteCloudJestStubs = require('suitecloud-unit-testing-stubs/SuiteCloudJestStubs');

const SuiteCloudJestCustomStubs = SuiteCloudJestStubs.customStubs;
/**
 * @typedef ModulesPath
 * @type {String}
 * @description Local project root directory for modules to alias
 */
const ModulesPath = `${__dirname}/stubs/SuiteScripts/Modules`;
/**
 * @typedef PathAlias
 * @type {Object}
 * @property {String} module - "Directory/Path/ModuleName" -- Custom module name/path to use
 * @property {String} path - Path to module within current project -- see `ModulesPath` for example root dir
 * @description Array of module names and paths to use for them in the stubs package
 * @summary Here, you can control the paths for stubbed modules to their local file for Jest tests.
 */
/**
 * @name PathAliases
 * @type {PathAlias[]}
 * @description Array of modules in project to provide module name aliases for
 */
const PathAliases = [
  {
    module: '/SuiteScripts/Modules/aModule',
    path: `${ModulesPath}/aModule`,
  },
  {
    module: '/SuiteScripts/Modules/aModule.min',
    path: `${ModulesPath}/aModule`,
  },
  {
    module: '/SuiteScripts/Modules/bModule',
    path: `${ModulesPath}/bModule`,
  },
  {
    module: '/SuiteScripts/Modules/bModule.min',
    path: `${ModulesPath}/bModule`,
  },
];

/**
 * @name BuildJestConfig
 * @function
 * @description Builds Jest config file using stubs and SuiteCloud config
 * @since 2022.2
 */
const BuildJestConfig = SuiteCloudJestConfiguration.build({
  testResultsProcessor: './node_modules/jest-junit-reporter',
  projectFolder: cliConfig.defaultProjectFolder,
  projectType: SuiteCloudJestConfiguration.ProjectType.ACP,
  customStubs: SuiteCloudJestCustomStubs.concat(PathAliases),
  testPathIgnorePatterns: [
    '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    '**.*\\.min\\.*',
  ],
});

module.exports = BuildJestConfig;
