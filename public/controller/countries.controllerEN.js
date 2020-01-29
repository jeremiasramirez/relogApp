app.controller("en", ["$scope", "$http", function($scope, $http) {

    // back page
    $scope.backButton = function() {
        window.history.back()
    }

    $scope.countriesEN = [];




    // http

    var getData = function() {

        let urlS = 'https://restcountries.eu/rest/v2/lang/en'


        $http({

            method: 'get',
            url: urlS

        }).then(function(response) {

            $scope.countriesEN.push(response)

        })

    }

    getData()



    // paginador





}])