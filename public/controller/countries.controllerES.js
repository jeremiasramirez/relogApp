app.controller("es", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams) {

    // back page

    $scope.backButton = function() {
        window.history.back()
    }



    $scope.countriesES = [];
    $scope.countriesOnlyES = []
    $scope.IfNotExistParams = null;
    $scope.spinnChange = 1;
    $scope.searchOfCountry = ''

    $scope.route = $routeParams['id']

    if (!$scope.route) {
        $scope.IfNotExistParams = 1;
        let urlS = 'https://restcountries.eu/rest/v2/lang/es'

        $http({

            method: 'get',
            url: urlS

        }).then(function(response) {


            $scope.countriesES = response.data


        })

    } else {
        $scope.IfNotExistParams = 0;
        let urlS = 'https://restcountries.eu/rest/v2/alpha/' + $scope.route

        $http({

            method: 'get',
            url: urlS

        }).then(function(response) {


            $scope.countriesOnlyES = response

            console.log($scope.countriesOnlyES)
        })
    }



    // http





    // paginator


}])