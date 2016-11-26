/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/DevelopCtrl.js';

exports.getMenuItem = function() {
	return {
		name: 'Develop',
		link: '#/develop'
	};
};

exports.getHomeItem = function(){
	return {
		image: 'edit',
		color: 'blue',
		path: '#/develop',
		title: 'Develop',
		description: 'Development Toolkits'
	};
};

exports.getRoute = function() {
	return {
		'location': '/develop',
		'controller': 'DevelopCtrl',
		'template': 'templates/develop.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
