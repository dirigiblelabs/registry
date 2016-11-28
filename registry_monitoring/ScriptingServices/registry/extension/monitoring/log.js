/* eslint-env node, dirigible */

exports.getRoute = function() {
	return {
		'location': '/monitoring/logging',
		'template': 'templates/monitoring/log.html'
	};
};