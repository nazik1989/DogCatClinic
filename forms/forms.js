'use strict'
app.controller('FormsCtrl',function($scope,$http) {

        $scope.send= function () {
           // var animal = {};
            var animal = $scope.patient;
            console.log(animal);
            $http.post('http://localhost:8081/create_patients', animal).then(function (requestHttp) {
                console.log(requestHttp.status);
            });
        };
});


