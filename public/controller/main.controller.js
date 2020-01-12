app.controller("main", ["$scope", "$timeout", function($scope, $timeout) {


    // features
    $scope.features = {
        showposter: 0,
        msjOnNewHour: 0
    }


    $timeout(function() {
        $scope.features.showposter = 1;
    }, 2000);



    //timing 
    $scope.timingTime = {
        hr: 0,
        min: 0,
        sec: 0,
        mills: 0
    }

    $scope.hora = 0;

    setInterval(function() {

        $scope.hora = new Date();

        $scope.timingTime.hr = $scope.hora.getHours();
        $scope.timingTime.min = $scope.hora.getMinutes();
        $scope.timingTime.sec = $scope.hora.getSeconds();
        $scope.timingTime.mills = $scope.hora.getMilliseconds();

        $scope.resolveLocalTime($scope.timingTime);


        $scope.features.msjOnNewHour = $scope.timingTime.min



        if ($scope.features.msjOnNewHour == 0) {
            floatNotificationInfo("En hora buena");
        }

        $scope.$apply()
    }, 1000);







    $scope.resolveLocalTime = function(timingTime) {

        if ($scope.timingTime.hr == '13') {
            $scope.timingTime.hr = 1;
        }
        if ($scope.timingTime.hr == '14') {
            $scope.timingTime.hr = 2
        }
        if ($scope.timingTime.hr == 15) {
            $scope.timingTime.hr = 3;
        }
        if ($scope.timingTime.hr == 16) {
            $scope.timingTime.hr = 4;
        }
        if ($scope.timingTime.hr == 16) {
            $scope.timingTime.hr = 5;
        }
        if ($scope.timingTime.hr == 17) {
            $scope.timingTime.hr = 6;
        }
        if ($scope.timingTime.hr == 18) {
            $scope.timingTime.hr = 7;
        }
        if ($scope.timingTime.hr == 19) {
            $scope.timingTime.hr = 8;
        }
        if ($scope.timingTime.hr == 20) {
            $scope.timingTime.hr = 9;
        }
        if ($scope.timingTime.hr == 21) {
            $scope.timingTime.hr = 10;
        }
        if ($scope.timingTime.hr == 22) {
            $scope.timingTime.hr = 11;
        }
    }






}])