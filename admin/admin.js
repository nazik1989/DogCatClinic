'use strict'
 app.controller('AdminCtrl', function($scope,$http,$route) {

     $http.get('http://127.0.0.1:8081/newpacient')
         .then(function (response) {
             $scope.newPacients = response.data;

            // console.log(response.data);
         });

     $scope.ResData ="eee";

     $scope.accept = function (id,index) {
         var ID = {id:id};
         console.log(index);
         console.log("araj",$scope.newPacients[index]);
         delete $scope.newPacients[index]._id;
         console.log("heto",$scope.newPacients[index]);
         $http.post('http://127.0.0.1:8081/our_patients', $scope.newPacients[index]).then(function (res) {
            console.log(res.data);
             $scope.ardyunq = res.data;

         });
         $http.post('http://127.0.0.1:8081/delete_pacient', ID).then(function (res) {
            $scope.ResData =  res.data;
            console.log( $scope.ResData );
            alert ( $scope.ardyunq + "անուն և "+ $scope.ResData.id + " ID ունեցող պացիենը ուղարկվել է սեփական պացիենտներ բաժին");
            $route.reload();
         });

     };


     $scope.noAccept = function (id) {
         var ID = {id:id};

         $http.post('http://127.0.0.1:8081/delete_pacient', ID).then(function (res) {
           $scope.ResData =  res.data;
           //console.log( $scope.ResData );
           alert ($scope.ResData.id + "ID ունեցող պացիենին մերժվել է մուտք գործել համակարգ");
           $route.reload();
         });
     }


 })