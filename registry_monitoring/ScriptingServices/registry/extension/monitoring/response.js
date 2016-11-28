/* eslint-env node, dirigible */

exports.getRoute = function() {
	return {
		'location': '/monitoring/response',
		'template': 'templates/monitoring/response.html'
	};
};