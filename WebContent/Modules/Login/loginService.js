var loginService = angular.module('loginService', []);

loginService.factory('loginServiceFactory', function($http, $q, URL) {
	return {
		validateUser: function(obj) {
			var defer = $q.defer();
			$http({
				method: 'POST',
				url: 'http://10.184.57.58/UserMang/Service/UserManagement.svc/validateLogin',
				data: obj,
			}).then(function successCallback(response) {
				defer.resolve(response.data);
			}, function errorCallback(response) {
				defer.reject(response);
			});
			return defer.promise;
		}
	}
});