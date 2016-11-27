/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/discover/JobCtrl.js';

exports.getRoute = function() {
	return {
		'location': '/integration/job',
		'controller': 'JobCtrl',
		'template': 'templates/discover/job.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
