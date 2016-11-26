/* globals $ */
/* eslint-env node, dirigible */

const EXT_POINT_NAME = '/registry/extension_point/launchpad';

var extensions = require('core/extensions');

exports.getMenu = function() {
	var menu = [];
	var registryExtensions = getRegistryExtensions();
	for (var i = 0; i < registryExtensions.length; i ++) {
		if (isFunction(registryExtensions[i].getMenuItem)) {
			menu.push(registryExtensions[i].getMenuItem());
		}
	}
	return menu;
};

exports.getHomeData = function() {
	var homeData = [];
	var registryExtensions = getRegistryExtensions();
	for (var i = 0; i < registryExtensions.length; i ++) {
		if (isFunction(registryExtensions[i].getHomeItem)) {
			homeData.push(registryExtensions[i].getHomeItem());
		}
	}
	return homeData;
};

exports.getRoutes = function() {
	var routes = '';
	var registryExtensions = getRegistryExtensions();
	for (var i = 0; i < registryExtensions.length; i ++) {
		if (isFunction(registryExtensions[i].getRoute)) {
			routes += createRoute(registryExtensions[i].getRoute()) + '\n';
		}
	}
	return routes;
};

exports.getControllers = function() {
	var controllers = '';
	var registryExtensions = getRegistryExtensions();
	for (var i = 0; i < registryExtensions.length; i ++) {
		if (isFunction(registryExtensions[i].getController)) {
			controllers += registryExtensions[i].getController() + '\n';
		}
	}
	return controllers;
};


function getRegistryExtensions() {
	var registryExtensions = [];
	var extensionNames = extensions.getExtensions(EXT_POINT_NAME);
	for (var i = 0; i < extensionNames.length; i ++) {
		var extension = extensions.getExtension(extensionNames[i], EXT_POINT_NAME);
		registryExtensions.push(require(extension.getLocation()));
	}
	return registryExtensions;
}

function isFunction(f) {
	return typeof f === 'function';
}

function createRoute(route) {
	return '.when(\'' + route.location + '\', {'
		+ 'controller: \'' + route.controller + '\', '
		+ 'templateUrl: \'' + route.template + '\''
		+ '})';
}
