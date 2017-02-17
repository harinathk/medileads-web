angular
  .module('mediLeadsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/queues/allDoctors', {
    	  templateUrl: 'views/queues.html',
    	  controller: 'QueuesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });