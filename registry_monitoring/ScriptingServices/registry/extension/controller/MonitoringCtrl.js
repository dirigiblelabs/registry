/*globals controllers */
/*eslint-env browser */

controllers.controller('MonitoringCtrl', ['$scope', '$http',
	function($scope, $http) {
		loadItems();
		loadDescriptions();

		function loadItems() {
			$http.get('../../js/registry/monitoring/api/items.js').success(function(data){
				$scope.monitoringData = [];
				for (var i = 0 ; i < data.length; i++) {
					$scope.monitoringData.push(data[i]);
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
