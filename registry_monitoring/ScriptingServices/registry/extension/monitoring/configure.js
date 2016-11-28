/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/monitoring/ConfigureCtrl.js';

exports.getRoute = function() {
	return {
		'location': '/monitoring/manage',
		'controller': 'ConfigureCtrl',
		'template': 'templates/monitoring/configure.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
