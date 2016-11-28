/* eslint-env node, dirigible */

exports.getRoute = function() {
	return {
		'location': '/monitoring/hits',
		'template': 'templates/monitoring/hits.html'
	};
};