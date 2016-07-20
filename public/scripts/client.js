

angular.module('patronusApp').controller('PatronusController', function($scope, DataService){
  $scope.data = DataService.data;
  $scope.addPatronus = DataService.addPatronus;
  $scope.addName = DataService.addName;
  $scope.test = test;
  $scope.refresh = refresh;

  function refresh(){
    // $scope.getPatronus();
    $scope.getName();

  }
  function test (){
    $scope.name = '';
  }
});
