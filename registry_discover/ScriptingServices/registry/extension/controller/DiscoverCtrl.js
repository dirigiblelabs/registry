/*globals controllers */
/*eslint-env browser */

controllers.controller('DiscoverCtrl', ['$scope', '$http',
	function($scope, $http) {
		loadItems();
		loadDescriptions();

		function loadItems() {
			$http.get('../../js/registry/discover/api/items.js').success(function(data){
				$scope.discoverData = [];
				for (var i = 0 ; i < data.length; i++) {
					$scope.discoverData.push(data[i]);
				}
			});
		}
		
		function loadDescriptions() {
			$http.get('../../js/registry/data/discover/data.js').success(function(data){
				$scope.descriptionInfoItems = [];
				for (var i = 0 ; i < data.length; i++) {
					$scope.descriptionInfoItems.push(data[i].data);
				}
			});
		}
	}
]);
