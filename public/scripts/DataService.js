angular.module('patronusApp').factory('DataService', function($http){

  var data = {};
  // data.people = [];

  function peopleSuccess(response) {
      console.log('Success: ', response);
    }

  function getPatronusSuccess(response) {
    console.log('patronus Success response', response.data);
    data.patronuses = response.data;
    }

  function handleFailure(response) {
    console.log('Failure: ', response);
  }

  function getNameSuccess(response){
    console.log('Name Success response', response.data);
    data.people = response.data;
  }

  function refresh(){
    getPatronus();
    getName();

  }

  function getPatronus() {

    $http.get("/patronuses" ).then(getPatronusSuccess, handleFailure);

  }

  function addPatronus(data) {
    var sendData = {};
    sendData.data = data;
    $http.post("/patronuses", sendData).then(handleSuccess, handleFailure);

  }
  function getName() {

    $http.get("/people").then(getNameSuccess, handleFailure);

  }

  function addName(data) {
    var sendData = {};
    var nameArray = data.split(' ');
    console.log(nameArray);
    sendData.firstName = nameArray[0];
    sendData.lastName = nameArray[1];
    $http.post("/people", sendData).then(handleSuccess, handleFailure);

  }

  function handleSuccess() {
    refresh();
  }
  
  getName();
  getPatronus();

  return {
    data: data,
    getName: getName,
    getPatronus: getPatronus,
    addName: addName,
    addPatronus: addPatronus
  }

})
