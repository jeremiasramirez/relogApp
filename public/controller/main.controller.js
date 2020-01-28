app.controller("main", ["$scope", "$timeout", function($scope, $timeout) {


    // features
    $scope.features = {
        showposter: 0,
        msjOnNewHour: 0,
        switcherDay: "AM"
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


        if ($scope.hora.getHours() == 12) {
            $scope.switcherDay = "PM";
        } else if ($scope.hora.getHours() >= 24 ||
            $scope.hora.getHours() == 00 ||
            $scope.hora.getHours() >= 01) {
            $scope.switcherDay = "AM";
        } else {
            $scope.switcherDay = "PM";
        }


        $scope.timingTime.hr = $scope.hora.getHours();
        $scope.timingTime.min = $scope.hora.getMinutes();
        $scope.timingTime.sec = $scope.hora.getSeconds();
        $scope.timingTime.mills = $scope.hora.getMilliseconds();

        $scope.resolveLocalTime($scope.hora);


        $scope.features.msjOnNewHour = $scope.timingTime.min



        if ($scope.features.msjOnNewHour == 0) {
            floatNotificationInfo("En hora buena");
        }




        $scope.$apply()
    }, 1000);

    $scope.activeClassMenu = 1;

    $scope.active = function() {

        if ($scope.activeClassMenu == 1) {
            $scope.activeClassMenu = 0;

        } else {
            $scope.activeClassMenu = 1;

        }

    }




    $scope.resolveLocalTime = function(timingTime) {



        if ($scope.timingTime.hr == 0) {
            $scope.timingTime.hr = 1;
        }
        if ($scope.timingTime.hr == '13') {
            $scope.timingTime.hr = 1;
            $scope.switcherDay = "PM";
        }
        if ($scope.timingTime.hr == '14') {
            $scope.timingTime.hr = 2
            $scope.switcherDay = "PM";
        }
        if ($scope.timingTime.hr == 15) {
            $scope.timingTime.hr = 3;
            $scope.switcherDay = "PM";
        }
        if ($scope.timingTime.hr == 16) {
            $scope.timingTime.hr = 4;
            $scope.switcherDay = "PM";
        }
        if ($scope.timingTime.hr == 16) {
            $scope.timingTime.hr = 5;
            $scope.switcherDay = "PM";
        }
        if ($scope.timingTime.hr == 17) {
            $scope.timingTime.hr = 5;
            $scope.switcherDay = "PM";
        }
        if ($scope.timingTime.hr == 18) {
            $scope.timingTime.hr = 6;
            $scope.switcherDay = "PM";
        }
        if ($scope.timingTime.hr == 19) {
            $scope.timingTime.hr = 7;
            $scope.switcherDay = "PM";
        }
        if ($scope.timingTime.hr == 20) {
            $scope.timingTime.hr = 8;
            $scope.switcherDay = "PM";
        }
        if ($scope.timingTime.hr == 21) {
            $scope.timingTime.hr = 9;
            $scope.switcherDay = "PM";
        }
        if ($scope.timingTime.hr == 22) {
            $scope.timingTime.hr = 10;
            $scope.switcherDay = "PM";
        }
        if ($scope.timingTime.hr == 23) {
            $scope.timingTime.hr = 11;
            $scope.switcherDay = "PM";
        }




    }


}])