/* eslint-env node, dirigible */

exports.getType = function() {
	return 'Develop';
};

exports.getHomeItem = function() {
	return {
		image: 'laptop',
		color:'blue',
		path:'../../index.html',
		title:'Web IDE',
		description:'Development Toolkit',
		newTab:true
	};
};

exports.getOrder = function() {
	return 1;
};
