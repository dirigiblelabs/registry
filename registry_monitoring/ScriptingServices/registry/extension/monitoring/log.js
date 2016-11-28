/* eslint-env node, dirigible */

exports.getType = function() {
	return 'Monitoring';
};

exports.getHomeItem = function() {
	return {
		image: 'film',
		color: 'lblue',
		path: '#/monitoring/logging',
		title: 'Log',
		description: 'Applications Log'
	};
};

exports.getRoute = function() {
	return {
		'location': '/monitoring/logging',
		'template': 'templates/monitoring/log.html'
	};
};

exports.getOrder = function() {
	return 6;
};