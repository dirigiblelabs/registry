/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/discover/RegistryContentCtrl.js';

exports.getMenuItem = function() {
	return {
		name: 'Registry',
		link: '#/content'
	};
};

exports.getHomeItem = function(){
	return {
		image: 'search',
		color: 'green',
		path: '#/content',
		title: 'Registry',
		description: 'Browse Registry Content'
	};
};

exports.getRoute = function() {
	return {
		'location': '/content',
		'controller': 'RegistryContentCtrl',
		'template': 'templates/discover/registry.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
