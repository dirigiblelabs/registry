/* eslint-env node, dirigible */

exports.getType = function() {
	return 'Develop';
};

exports.getHomeItem = function() {
	return {
		image: "desktop",
		color: "lila",
		path: "http://download.eclipse.org/dirigible/drops/M20160119-1919/p2/rcp/",
		title: "Desktop IDE",
		description: "Eclipse Plugins",
		newTab: true
	};
};

exports.getOrder = function() {
	return 3;
};
