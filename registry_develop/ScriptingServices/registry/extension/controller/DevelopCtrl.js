/*globals controllers */
/*eslint-env browser */

controllers.controller('DevelopCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.descriptionInfoItems = [];
		$scope.developData = [{
			image: "laptop",
			color:"blue",
			path:"../../index.html",
			title:"Web IDE",
			description:"Development Toolkit",
			newTab:true
		}, {
			image: "mobile",
			color: "lblue",
			path: "#/workspace",
			title: "Light IDE",
			description: "Lightweight Development"
		}, {
			image: "desktop",
			color: "lila",
			path: "http://download.eclipse.org/dirigible/drops/M20160119-1919/p2/rcp/",
			title: "Desktop IDE",
			description: "Eclipse Plugins",
			newTab: true
		}
	];


		loadDescriptions();

		function loadDescriptions() {
			$http.get('../../js/registry/data/develop/data.js').success(function(data){
				for (var i = 0 ; i < data.length; i++) {
					$scope.descriptionInfoItems.push(data[i].data);
				}
			});
		}

	}
]);
