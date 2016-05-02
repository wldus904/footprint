menuDirective = function() {
	return{
		template: "<div class='topMenuWrap'>" +
					"<div class='topMenu' ng-repeat='menu in menuList' ng-click='goMenu(menu)'>{{menu.title}}</div>" +
				"</div>",
		controller: function($scope, $location, sessionService) {
			$scope.menuList = [
			                   {title: "추천 여행", path: "/recommendTravel", session: false},
			                   {title: "여행 미션", path: "/travelMission", session: false},
			                   {title: "나의 여행", path: "/myTravel", session: true},
			                   {title: "설정", path: "/setting", session: true}
			                   ]
			
			$scope.goMenu = function(data) {
				if(data.session){
					if(sessionService.confirmSession()){
						$location.path(data.path);
					}else{
						alert("로그인 후 이용해 주세요.");
					}
				}else{
					$location.path(data.path);
				}
			}
		}
	}
}

footprintDir.directive('menuDirective', menuDirective);