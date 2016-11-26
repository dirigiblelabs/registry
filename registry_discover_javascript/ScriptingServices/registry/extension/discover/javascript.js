/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/discover/JavaScriptCtrl.js';

exports.getRoute = function() {
	return {
		'location': '/scripting/javascript',
		'controller': 'JavaScriptCtrl',
		'template': 'templates/discover/javascript.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
