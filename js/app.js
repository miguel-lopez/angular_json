var app = angular.module("app", ["ngResource"]);


app.controller('appController',function($scope, $http) {

  // Function to get the data
  $scope.getData = function(){
    $http.get('js/data.json')
      .success(function(data, status, headers, config) {
          $scope.datos = data;
          
        console.log('Fetched data!');
      });
  };

  // Run function every second
  setInterval($scope.getData, 1000);

});