var eventApp=angular.module("event",['ui.router','LoginModule','loginService']);

eventApp.controller("eventController", function($scope, $rootScope, $state){
	alert('Entereeeeeeeeeeeeeddddddddd into eventController');
});

eventApp.constant("URL",{});

eventApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise(appPath + "/login");
	$stateProvider
	.state('login', {
		cache: true,
		url: appPath + "/login",
		views: {
			"header@":{templateUrl: appPath + "/Modules/Header/LoginHeader.tpl.html"},
			
			"@": {
				templateUrl: appPath + "/Modules/Login/Login.tpl.html",
				controller: "LoginController"
			}
		}		 
	})
});

eventApp.run(function($state, $rootScope) {
	$rootScope.$on('$stateChangeSuccess', function (e, toState, toParams, fromState, fromParams) {
		if (toState.name == "login") {
			$rootScope.moduleName = "login";
		}
	});	
});

