/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/discover/SQLCtrl.js';

exports.getRoute = function() {
	return {
		'location': '/scripting/sql',
		'controller': 'SQLCtrl',
		'template': 'templates/discover/sql.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
