/*globals controllers */
/*eslint-env browser */

controllers.controller('DevelopCtrl', ['$scope', '$http',
	function($scope, $http) {
		loadItems();
		loadDescriptions();

		function loadItems() {
			$http.get('../../js/registry/develop/api/items.js').success(function(data){
				$scope.developData = [];
				for (var i = 0 ; i < data.length; i++) {
					$scope.developData.push(data[i]);
				}
			});
		}
		
		function loadDescriptions() {
			$http.get('../../js/registry/data/develop/data.js').success(function(data){
				$scope.descriptionInfoItems = [];
				for (var i = 0 ; i < data.length; i++) {
					$scope.descriptionInfoItems.push(data[i].data);
				}
			});
		}
	}
]);