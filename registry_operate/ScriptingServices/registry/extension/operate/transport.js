/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/operate/TransportCtrl.js';

exports.getRoute = function() {
	return {
		'location': '/content/import',
		'controller': 'TransportCtrl',
		'template': 'templates/operate/transport.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
