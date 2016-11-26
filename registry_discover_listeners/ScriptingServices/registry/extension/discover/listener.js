/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/discover/ListenerCtrl.js';

exports.getRoute = function() {
	return {
		'location': '/integration/listener',
		'controller': 'ListenerCtrl',
		'template': 'templates/discover/listener.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
