/*globals controllers */
/*eslint-env browser */

controllers.controller('DiscoverCtrl', ['$scope', '$http',
	function($scope, $http) {

		$scope.discoverData = [{
				image: 'search',
				color: 'green',
				path: '#/content',
				title: 'Registry',
				description: 'Browse Registry Content'
			}, {
				image: 'globe',
				color: 'yellow',
				path: '#/web/content',
				title: 'Web',
				description: 'Browse User Interfaces'
			}, {
				image: 'book',
				color: 'yellow',
				path: '#/web/wiki',
				title: 'Wiki',
				description: 'Browse Documentation'
			}, {
				image: 'mobile-phone',
				color: 'blue',
				path: '#/mobile',
				title: 'Mobile',
				description: 'Native Mobile Apps'
			}, {
				image: 'file-code-o',
				color: 'lblue',
				path: '#/scripting/javascript',
				title: 'JavaScript',
				description: 'JavaScript Services'
			}, {
				image: 'database',
				color: 'lblue',
				path: '#/scripting/sql',
				title: 'SQL',
				description: 'SQL Services'
			}, {
				image: 'gear',
				color: 'lblue',
				path: '#/scripting/command',
				title: 'Command',
				description: 'Command Services'
			}, {
				image: 'cogs',
				color: 'green',
				path: '#/scripting/tests',
				title: 'Tests',
				description: 'Test Cases'
			}, {
				image: 'caret-square-o-right',
				color: 'orange',
				path: '#/integration/flow',
				title: 'Flows',
				description: 'Integration Flows'
			}, {
				image: 'caret-square-o-right',
				color: 'orange',
				path: '#/integration/job',
				title: 'Jobs',
				description: 'Integration Jobs'
			}, {
				image: 'caret-square-o-right',
				color: 'orange',
				path: '#/integration/listener',
				title: 'Listeners',
				description: 'Integration Listeners'
			}
		];

		$scope.descriptionInfoItems = [];

		loadDescriptions();

		function loadDescriptions() {
			$http.get('../../js/registry/data/discover/data.js').success(function(data){
				for (var i = 0 ; i < data.length; i++) {
					$scope.descriptionInfoItems.push(data[i].data);
				}
			});
		}
	}
]);