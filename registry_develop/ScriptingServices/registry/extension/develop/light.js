/* eslint-env node, dirigible */

exports.getType = function() {
	return 'Develop';
};

exports.getHomeItem = function() {
	return {
		image: "mobile",
		color: "lblue",
		path: "#/workspace",
		title: "Light IDE",
		description: "Lightweight Development"
	};
};

exports.getOrder = function() {
	return 2;
};
