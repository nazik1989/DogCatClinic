'use strict';

app.controller('StaffCtrl', function($scope, $http,$rootScope) {
    $scope.send = function ($scope) {

        $rootScope.em = "Tigranik";
    };
});