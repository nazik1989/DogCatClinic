'use strict'

app.controller('DoctornameCtrl', function($scope,$http) {

    // $scope.date=1;
    // $scope.vaccine=2;
    // $scope.veterinarian=3;

    $http.get('http://127.0.0.1:8081/our_pacients')
        .then(function (response) {
            $scope.our_pacients = response.data;
            // console.log(response.data);


    $scope.update = function (id) {
        $scope.yesUpdate = function () {
            $scope.animal._id = id;
            console.log("$scope.animal ", $scope.animal);

            $http.post('http://127.0.0.1:8081/update_pacientInformation', $scope.animal).then(function (res) {
                console.log("All ok");
                //$scope.ResData =  res.data;
                //console.log( $scope.ResData );
                //alert ($scope.ResData.id + "ID ունեցող պացիենին մերժվել է մուտք գործել համակարգ");
                //$route.reload();
            });

        };

    };

})


});

