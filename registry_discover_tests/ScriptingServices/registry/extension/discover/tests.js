/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/discover/TestsCtrl.js';

exports.getRoute = function() {
	return {
		'location': '/scripting/tests',
		'controller': 'TestsCtrl',
		'template': 'templates/discover/tests.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
