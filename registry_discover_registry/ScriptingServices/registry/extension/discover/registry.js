/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/discover/RegistryContentCtrl.js';

exports.getRoute = function() {
	return {
		'location': '/content',
		'controller': 'RegistryContentCtrl',
		'template': 'templates/discover/registry.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
