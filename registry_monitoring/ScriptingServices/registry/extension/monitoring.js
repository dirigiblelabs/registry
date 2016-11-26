/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/MonitoringCtrl.js';

exports.getMenuItem = function() {
	return {
		name: 'Monitoring',
		link: '#/monitoring'
	};
};

exports.getHomeItem = function(){
	return {
		image: 'area-chart',
		color: 'red',
		path: '#/monitoring',
		title: 'Monitoring',
		description: 'Basic Metrics'
	};
};

exports.getRoute = function() {
	return {
		'location': '/monitoring',
		'controller': 'MonitoringCtrl',
		'template': 'templates/monitoring.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
