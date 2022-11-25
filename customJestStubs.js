/** @format */

const CustomStubMap = {
  'Modules/aModule': 'Modules/aModule',
  'Modules/aModule.min': 'Modules/aModule.min',
  'Modules/bModule': 'Modules/bModule',
  'Modules/bModule.min': 'Modules/bModule.min',
};

const PKG_STUBS_PATH =
  '@vnetwork-solutions/ns-custom-stubs-template/stubs/SuiteScripts';

const CUSTOM_STUBS = exclude =>
  Object.keys(CustomStubMap).map(filename => {
    const StubModuleName = `/SuiteScripts/${CustomStubMap[filename]}`;
    let stubPath = `<rootDir>/node_modules/${PKG_STUBS_PATH}/${filename}.js`;
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
  customStubs: CUSTOM_STUBS,
};
