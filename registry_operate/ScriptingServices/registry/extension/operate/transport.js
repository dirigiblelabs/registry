/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/operate/TransportCtrl.js';

exports.getType = function() {
	return 'Operate';
};

exports.getHomeItem = function() {
	return {
		image: "truck",
		color: "blue",
		path: "#/content/import",
		title: "Transport",
		description: "Transport Registry Content"
	};
};

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

exports.getOrder = function() {
	return 1;
};
