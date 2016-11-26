controllers.controller('HomeCtrl', ['$scope', '$http',
	function($scope, $http) {
		const API_HOME = '../../js/registry/api/home.js';

		$http.get(API_HOME).success(function (data) {
			$scope.homeData = data;
		});
	}
]);
