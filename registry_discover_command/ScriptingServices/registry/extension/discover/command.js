/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/discover/CommandCtrl.js';

exports.getRoute = function() {
	return {
		'location': '/scripting/command',
		'controller': 'CommandCtrl',
		'template': 'templates/discover/command.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
