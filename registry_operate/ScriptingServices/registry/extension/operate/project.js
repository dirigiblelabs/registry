/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/operate/ProjectCtrl.js';

exports.getRoute = function() {
	return {
		'location': '/content/project',
		'controller': 'ProjectCtrl',
		'template': 'templates/operate/project.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
