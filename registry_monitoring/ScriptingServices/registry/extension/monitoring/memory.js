/* eslint-env node, dirigible */

exports.getRoute = function() {
	return {
		'location': '/monitoring/memory',
		'template': 'templates/monitoring/memory.html'
	};
};
