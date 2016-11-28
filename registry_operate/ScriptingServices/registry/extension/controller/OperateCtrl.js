/*globals controllers */
/*eslint-env browser */

controllers.controller('OperateCtrl', ['$scope', '$http',
	function($scope, $http) {
		loadItems();
		loadDescriptions();

		function loadItems() {
			$http.get('../../js/registry/operate/api/items.js').success(function(data){
				$scope.operateData = [];
				for (var i = 0 ; i < data.length; i++) {
					$scope.operateData.push(data[i]);
				}
			});
		}
		
		function loadDescriptions() {
			$http.get('../../js/registry/data/operate/data.js').success(function(data){
				$scope.descriptionInfoItems = [];
				for (var i = 0 ; i < data.length; i++) {
					$scope.descriptionInfoItems.push(data[i].data);
				}
			});
		}
	}
]);
