/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/develop/LightIDECtrl.js';

exports.getType = function() {
	return 'Develop';
};

exports.getHomeItem = function() {
	return {
		image: "mobile",
		color: "lblue",
		path: "#/workspace",
		title: "Light IDE",
		description: "Lightweight Development"
	};
};


exports.getRoute = function() {
	return {
		'location': '/workspace',
		'controller': 'LightIDECtrl',
		'template': 'templates/develop/lightide.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};

exports.getOrder = function() {
	return 2;
};
