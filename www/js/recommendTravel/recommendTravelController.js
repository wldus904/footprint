recommendTravelCtrl = function($scope) {
	$scope.map = {
		center: [37.576233, 126.976938],
		options: function() {
			return {
				streetViewControl: false,
				scrollwheel: false
			}
		},
		events: {
			click: function(e, map) {
				alert(e.latLng.lat() + " " + e.latLng.lng());
			}
		}
	}
	
	$scope.points = {
		  coords: [
			    [37.58, 126.976938],
			    [37.576400, 126.976938],
			    [37.57, 126.976938],
			    [37.576600, 126.970000]
		  ],
		  options: function(coords, properties, i, map) {
			  return {
				  draggable: true
			  }
		  },
		  events: {
			  click: function(e, point, map, points) {
				  alert(point)
			  }
		  },
		  decimals: 3
	};
}

footprintCtrl.controller("recommendTravelCtrl", recommendTravelCtrl);