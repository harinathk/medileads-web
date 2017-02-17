angular.module('mediLeadsApp')
  .controller('QueuesCtrl', function ($scope, $http, $routeParams) {
	  $http({
          method: 'GET',
          url: 'queues/allDoctors'
      }).then(function (response) {
    	  $scope.queues = response.data;
      }, function(response) {
    	  console.error('Error requesting queues.')
      });
  });