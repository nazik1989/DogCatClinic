"use strict";

app.controller("ServicesCtrl", function($scope,$http,$rootScope){

    $scope.myAdmin = $rootScope.em;
    console.log($scope.myAdmin);

});