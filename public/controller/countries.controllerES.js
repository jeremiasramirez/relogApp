app.controller("es", ["$scope", "$http", function($scope, $http) {

    // back page

    $scope.backButton = function() {
        window.history.back()
    }



    $scope.countriesES = [];





    // http
    var getData = function() {

        let urlS = 'https://restcountries.eu/rest/v2/lang/es'

        $http({

            method: 'get',
            url: urlS

        }).then(function(response) {

            $scope.countriesES.push(response)

        })

    }

    getData()


    // paginator


}])