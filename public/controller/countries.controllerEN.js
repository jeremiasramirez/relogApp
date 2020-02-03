app.controller("en", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams) {

    // back page
    $scope.backButton = function() {
        window.history.back()
    }



    $scope.countriesES = [];
    $scope.countriesOnlyES = []
    $scope.IfNotExistParams = null;
    $scope.spinnChange = 1;
    $scope.searchOfCountry = ''
    $scope.paginatorView = 0;
    $scope.route = $routeParams['id']

    if (!$scope.route) {

        $scope.paginatorView = 1;
        $scope.IfNotExistParams = 1;
        let urlS = 'https://restcountries.eu/rest/v2/lang/en'

        $http({

            method: 'get',
            url: urlS

        }).then(function(response) {


            $scope.countriesES = (response.data)



        })

    } else {
        $scope.IfNotExistParams = 0;
        let urlS = 'https://restcountries.eu/rest/v2/alpha/' + $scope.route

        $http({

            method: 'get',
            url: urlS

        }).then(function(response) {


            $scope.countriesOnlyES = (response.data)

        })
    }






    // paginator
    $scope.indexPag = 3;
    $scope.varIndexPag = 0;
    $scope.numPage = ($scope.countriesES.length);
    $scope.back = function() {

        if ($scope.varIndexPag > 0) {

            // $scope.indexPag = 3;
            $scope.varIndexPag -= 1;

        }

    }


    $scope.next = function() {



        // $scope.indexPag = 3;
        $scope.varIndexPag += 1;



    }

}])