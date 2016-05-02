sessionService = function() {
	return {
		confirmSession : function() {
			var userId = window.sessionStorage.getItem('user_id');
			var result = true;
			
			if(userId == null){
				result = false;
			}
			
			return result;
		}
	}
}

footprintSer.factory("sessionService", sessionService);