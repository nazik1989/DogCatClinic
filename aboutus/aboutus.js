'use strict';
app.controller('AboutusCtrl',function($scope,names) {
     $scope.divShow = false;

        $scope.getnames = function(){
            $scope.names = names.get();
            $scope.divShow = $scope.names[0];

            console.log("$scope.names",$scope.names);
            console.log("Scope.divShow",$scope.divShow);
        }
        //$scope.divShow = true;
    });
// app.controller('AboutusCtrl',  ['$scope','$http','UserService',function($scope, $http,UserService) {
//     UserService.getUserName();
//     console.log(getUserName);
// }]);

// myApp.controller('ControllerTwo', ['$scope',UserService, function($scope,UserService) {
// //     UserService.getUserName();
// // }]);