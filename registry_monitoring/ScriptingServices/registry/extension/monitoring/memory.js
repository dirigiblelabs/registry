/* eslint-env node, dirigible */

exports.getType = function() {
	return 'Monitoring';
};

exports.getHomeItem = function() {
	return {
		image: 'line-chart',
		color: 'red',
		path: '#/monitoring/memory',
		title: 'Memory',
		description: 'Memory statistics'
	};
};

exports.getRoute = function() {
	return {
		'location': '/monitoring/memory',
		'template': 'templates/monitoring/memory.html'
	};
};

exports.getOrder = function() {
	return 4;
};