angular.module('mediLeadsApp')
  .controller('MainCtrl', function ($scope, $http) {
	  $http({
          method: 'GET',
          url: '/appointments'
      }).then(function(response) {
    	  $scope.appointments = response.data;
      }, function(response) {
    	  console.error('Error requesting appointments');
      });
  });