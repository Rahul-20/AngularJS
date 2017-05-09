//Add dependencies like directives or other js files.
var login=angular.module("LoginModule",['loginService']);

//controller function takes two parameters one is controller name and the function
login.controller('LoginController', function($scope,$state,loginServiceFactory){
	var reqObject = {
			username:"",
			password:"" 
	};
	
	alert('I am in login controller')
	
	$scope.login = {};
	$scope.createUserInfo=function(login) {
		reqObject.username = $scope.login.username;
		reqObject.password = $scope.login.password;
		var validateUserPromise = loginServiceFactory.validateUser(login);
		return validateUserPromise.then(function (data) {
            return data;
        }, function (error) {
        });
		
	}
}
)
