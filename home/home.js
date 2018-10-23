'use strict';

app.controller('HomeCtrl',function($scope,names) {
        $scope.names =[];
      $scope.inputData = "true";
      names.add($scope.inputData);




    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var pvalue = document.getElementsByClassName("mySlides");
        for (i = 0; i < pvalue.length; i++) {
            pvalue[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > pvalue.length) {myIndex = 1}
        pvalue[myIndex-1].style.display = "block";
        setTimeout(carousel, 7000); // Change p every 7 seconds
    }



    });