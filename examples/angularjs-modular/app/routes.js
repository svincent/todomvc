/*global todomvc, angular */
'use strict';

todomvc.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
    .state('main', {
      url: "/",
      views: {
        "main": { template: "<todo-main/>" },
      },
    })
	;
	
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
});
