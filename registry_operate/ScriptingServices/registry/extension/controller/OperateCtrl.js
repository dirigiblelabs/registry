/*globals controllers */
/*eslint-env browser */

controllers.controller('OperateCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.operateData = [{
				image: "truck",
				color: "blue",
				path: "#/content/import",
				title: "Transport",
				description: "Transport Registry Content"
			}, {
				image: "toggle-on",
				color: "green",
				path: "#/content/clone",
				title: "Clone",
				description: "Clone Instance"
			}, {
				image: "sign-in",
				color: "yellow",
				path: "#/content/project",
				title: "Import",
				description: "Import Project"
			}
		];

		$scope.descriptionInfoItems = [];

		loadDescriptions();
	
		function loadDescriptions() {
			$http.get('../../js/registry/data/operate/data.js').success(function(data){
				for (var i = 0 ; i < data.length; i++) {
					$scope.descriptionInfoItems.push(data[i].data);
				}
			});
		}
	}
]);