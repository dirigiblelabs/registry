/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/registry/extension/controller/OperateCtrl.js';

exports.getMenuItem = function() {
	return {
		name: 'Operate',
		link: '#/operate'
	};
};

exports.getHomeItem = function(){
	return {
		image: 'wrench',
		color: 'orange',
		path: '#/operate',
		title: 'Operate',
		description: 'Lifecycle Management'
	};
};

exports.getRoute = function() {
	return {
		'location': '/operate',
		'controller': 'OperateCtrl',
		'template': 'templates/operate.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};