recommendTravelCtrl = function($scope, $geolocation) {
	
	$scope.myPosition;
	
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
	
	$scope.infowindowList = [
         {
        	 position: [37.58, 126.976938],
       	     value: "시작"
     	 },
     	{
     		position: [37.576600, 126.970000],
     		  value: "끝"
     	 }
	];
	

	$scope.polylines = {
		coords: [
		    [
	     		[37.58, 126.976938],
			    [37.576400, 126.976938],
			    [37.57, 126.976938],
			    [37.576600, 126.970000]
		    ]
	    ],
	    options: function(l, map) {
	    	return {
	    		strokeColor: "#d35400"
	    	};
	    }
	}
	
	$geolocation.getCurrentPosition({
        timeout: 60000
     }).then(function(position) {
        $scope.myPosition = position;
        console.log("aaa", $scope.myPosition);
     });
	
	$scope.goMyLocation = function() {
		$scope.map.center = [$scope.myPosition.coords.latitude, $scope.myPosition.coords.longitude];
	}
}

footprintCtrl.controller("recommendTravelCtrl", recommendTravelCtrl);