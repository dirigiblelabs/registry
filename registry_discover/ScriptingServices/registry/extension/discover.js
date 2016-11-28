/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/DiscoverCtrl.js';

exports.getType = function() {
	return 'Home';
};

exports.getMenuItem = function() {
	return {
		name: 'Discover',
		link: '#/discover'
	};
};

exports.getHomeItem = function(){
	return {
		image: 'search',
		color: 'green',
		path: '#/discover',
		title: 'Discover',
		description: 'Service Endpoints'
	};
};

exports.getRoute = function() {
	return {
		'location': '/discover',
		'controller': 'DiscoverCtrl',
		'template': 'templates/discover.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};

exports.getOrder = function() {
	return 2;
};
