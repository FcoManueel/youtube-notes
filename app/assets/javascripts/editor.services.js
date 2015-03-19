angular.module('editorService', [])
.factory('editorService',['$http',function($http) {
	return {
		get : function(){
			return $http.get('/notes');
		},
		create : function(block) {
			return $http.post('/notes',block);
		},
		delete : function(id) {
			return $http.delete('/notes/'+id);
		}
	}
}]);
