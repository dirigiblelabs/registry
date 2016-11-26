/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/discover/WebContentCtrl.js';

exports.getRoute = function() {
	return {
		'location': '/web/content',
		'controller': 'WebContentCtrl',
		'template': 'templates/discover/web.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
