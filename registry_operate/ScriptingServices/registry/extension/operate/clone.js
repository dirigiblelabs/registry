/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/operate/CloneCtrl.js';

exports.getRoute = function() {
	return {
		'location': '/content/clone',
		'controller': 'CloneCtrl',
		'template': 'templates/operate/clone.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
