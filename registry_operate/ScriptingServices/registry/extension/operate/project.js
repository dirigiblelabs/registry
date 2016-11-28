/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/operate/ProjectCtrl.js';

exports.getType = function() {
	return 'Operate';
};

exports.getHomeItem = function() {
	return {
		image: "sign-in",
		color: "yellow",
		path: "#/content/project",
		title: "Import",
		description: "Import Project"
	};
};

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

exports.getOrder = function() {
	return 3;
};