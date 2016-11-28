/* eslint-env node, dirigible */

exports.getRoute = function() {
	return {
		'location': '/monitoring/log-console',
		'template': 'templates/monitoring/logconsole.html'
	};
};
