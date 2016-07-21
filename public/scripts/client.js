

angular.module('patronusApp').controller('PatronusController', function($scope, DataService){
  $scope.data = DataService.data;
  $scope.addPatronus = DataService.addPatronus;
  $scope.addName = DataService.addName;
  $scope.test = test;
  $scope.refresh = refresh;
  $scope.patronusAdd = false;
  $scope.nameAdd = false;
  $scope.togglePatronus = togglePatronus;
  $scope.toggleName = toggleName;

  function togglePatronus() {
    if ($scope.patronusAdd) {
      $scope.patronusAdd = false;
    } else {
      $scope.patronusAdd = true;
    }
  }

  function toggleName() {
    if ($scope.nameAdd) {
      $scope.nameAdd = false;
    } else {
      $scope.nameAdd = true;
    }
  }

  function refresh(){
    // $scope.getPatronus();
    $scope.getName();

  }
  function test (){
    $scope.name = '';
    $scope.patronus = '';
    $scope.patronusAdd = false;
    $scope.nameAdd = false;
  }
});
