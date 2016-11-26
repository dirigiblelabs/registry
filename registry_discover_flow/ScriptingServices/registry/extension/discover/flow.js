/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/discover/FlowCtrl.js';

exports.getRoute = function() {
	return {
		'location': '/integration/flow',
		'controller': 'FlowCtrl',
		'template': 'templates/discover/flow.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
