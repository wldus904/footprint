mainCtrl = function($scope, $location) {
	
	$scope.goDashBoard = function() {
		$location.path("/recommendTravel");
	}
	
}

footprintCtrl.controller("mainCtrl", mainCtrl);