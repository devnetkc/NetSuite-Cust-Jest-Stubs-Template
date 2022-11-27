# Introduction

This project is meant to serve as a baseline template project for getting tests implemented easier in to your NetSuite projects. Use these stubs for modules which are imported to other NetSuite SuiteCloud projects.

Using the directory path `/SuiteScript/...`, we can provide aliases locally for these modules while still being available in NetSuite -- as the root directory for SuiteScript files in NetSuite is `/SuiteScripts/`.

This project pairs with the [NetSuite-CustomModules-Template](https://github.com/devnetkc/NetSuite-CustomModules-Template) tutorial/template project.

## 🎉 Getting Started

1. Open [`./package.json`](./package.json) and customize the project configuration
2. Run `npm i` to install project dependencies
3. Add your module path aliases to [`customJestStubs.js`](./customJestStubs.js)
4. Create a local environment variable `NPM_TOKEN` using your NPM token for the value
5. Publish your npm package using `npm publish`

## 🧐 Notable Files

- [`README.hbs`](./.ci/templates/README.hbs) -- Base template file the project README.md is generated from
- [`npmrc`](./.npmrc) -- NPM environment token loader file for publishing project
- [`docsMD.config`](./.ci/config/docsMD.config.js) -- Wiki MD generator from JSDoc notations
- [`jsDocsConf.json`](./.ci/config/jsDocsConf.json) -- JSDocs configuration file

## 🔨 Scripts

Use `npm run <script>` to execute various commands for the project

- `npm run docs` -- Generates project documentation based on JSDoc notations (Configure with [docsMD.config](./.ci/config/docsMD.config.js) && [jsDocsConf.json](./.ci/config/jsDocsConf.json))
- `npm run open-docs` -- Opens documentation in browser for viewing

## 👷 CI/CD

Azure yaml pipeline files are provided in [`.ci/workflows`](./.ci/workflows).

- [`azure-pipelines-docs.yml`](./.ci/workflows/azure-pipelines-docs.yml) -- Generates documentation, commits,and pushes back to current PR/branch



## Modules

<dl>
<dt><a href="#module_aModule">aModule</a></dt>
<dd><p>Your custom NetSuite module A</p>
</dd>
<dt><a href="#module_bModule">bModule</a></dt>
<dd><p>Your custom NetSuite module B</p>
</dd>
</dl>

<a name="module_aModule"></a>

## aModule
Your custom NetSuite module A

**Summary**: This is example stub of custom NetSuite module A.  It may or may not be in your SuiteCloud project.
Update your `jest.config.js` to map this module from the stub pkg to your local project if it is available.
See project `jest.config.js` for further examples of this.  
**Format**:   
**Napiversion**: 2.1  
**Since**: 2022.2  
**Version**: 1.0.0  
**License**: NApiVersion  

* [aModule](#module_aModule)
    * [aModule(query, log)](#exp_module_aModule--aModule) ⏏
        * [.GetVendorPrefix(vendorId)](#module_aModule--aModule.GetVendorPrefix) ⇒ <code>String</code>
        * [.RunQuery(vendorId)](#module_aModule--aModule.RunQuery) ⇒ <code>String</code>

<a name="exp_module_aModule--aModule"></a>

### aModule(query, log) ⏏
NetSuite module A export function

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | NS query module |
| log | <code>Object</code> | NS log module |

<a name="module_aModule--aModule.GetVendorPrefix"></a>

#### aModule.GetVendorPrefix(vendorId) ⇒ <code>String</code>
Returns preferred vendor prefix from record or blank if no prefix is located

**Kind**: static method of [<code>aModule</code>](#exp_module_aModule--aModule)  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | <code>String</code> | Entity ID of vendor Ex: `4321` |

<a name="module_aModule--aModule.RunQuery"></a>

#### aModule.RunQuery(vendorId) ⇒ <code>String</code>
Returns query result of vendor prefix from vendor record

**Kind**: static method of [<code>aModule</code>](#exp_module_aModule--aModule)  
**Returns**: <code>String</code> - - Returns vendor prefix string from query result  
**Access**: protected  

| Param | Type | Description |
| --- | --- | --- |
| vendorId | <code>String</code> | Vendor entity ID to run query on |

<a name="module_bModule"></a>

## bModule
Your custom NetSuite module B

**Format**:   
**Napiversion**: 2.1  
**Since**: 2022.2  
**Version**: 1.0.0  
**License**: NApiVersion  

* [bModule](#module_bModule)
    * [bModule(log)](#exp_module_bModule--bModule) ⏏
        * [.set_CustomFieldValue(options)](#module_bModule--bModule.set_CustomFieldValue) ⇒ <code>undefined</code>

<a name="exp_module_bModule--bModule"></a>

### bModule(log) ⏏
NetSuite module B export function

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| log | <code>Object</code> | NS log module |

<a name="module_bModule--bModule.set_CustomFieldValue"></a>

#### bModule.set\_CustomFieldValue(options) ⇒ <code>undefined</code>
Example set custom body field value for record

**Kind**: static method of [<code>bModule</code>](#exp_module_bModule--bModule)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Object of parameters for setting custom body field |
| options.currentRecord | <code>Record</code> | NS Record Object to update |
| options.fieldId | <code>String</code> | Field id on record object to update value on |
| options.value | <code>String</code> | Value to set record field to |


Happy Coding! 🥳
