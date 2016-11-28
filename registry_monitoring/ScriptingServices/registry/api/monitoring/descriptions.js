/* globals $ */
/* eslint-env node, dirigible */

var response = require('net/http/response');
var registryExtensionUtils = require('registry/extension/registryExtensionUtils');

var descriptions = registryExtensionUtils.getDescriptions('Monitoring');

response.println(JSON.stringify(descriptions));
response.flush();
response.close();
