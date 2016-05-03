
var footprint = angular.module('starter', ['ngRoute', 'ionic', 'footprintCtrl', 'footprintDir', 'footprintSer', 'ngMaps', 'ngGeolocation']);
var footprintCtrl = angular.module('footprintCtrl', ['ngRoute', 'ionic']);
var footprintDir = angular.module('footprintDir', ['ngRoute', 'ionic']);
var footprintSer = angular.module('footprintSer', ['ngRoute', 'ionic']);

footprint.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

footprint.config(function($urlRouterProvider, $routeProvider) {
	
	
	
	$routeProvider
		.when('/', {
			templateUrl: 'views/main/main.html',
			controller: 'mainCtrl'
		})
		.when('/dashboard', {
			templateUrl: 'views/dashboard/dashboard.html',
			controller: 'dashBoardCtrl'
		})
		.when('/recommendTravel', {
			templateUrl: 'views/recommendTravel/recommendTravel.html',
			controller: 'recommendTravelCtrl'
		})
		.when('/travelMission', {
			templateUrl: 'views/travelMission/travelMission.html',
			controller: 'travelMissionCtrl'
		})
		.when('/myTravel', {
			templateUrl: 'views/myTravel/myTravel.html',
			controller: 'myTravelCtrl'
		})
		.when('/setting', {
			templateUrl: 'views/setting/setting.html',
			controller: 'settingCtrl'
		})
	.otherwise({
		redirectTo: '/'
	}); // 초기 화면 설정 
	  
});
