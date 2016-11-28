/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/monitoring/AccessLogCtrl.js';

exports.getRoute = function() {
	return {
		'location': '/monitoring/acclog',
		'controller': 'AccessLogCtrl',
		'template': 'templates/monitoring/accesslog.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
