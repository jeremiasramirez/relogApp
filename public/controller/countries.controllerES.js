app.controller("es", ["$scope", "$routeParams", function($scope, $routeParams) {



    $scope.backButton = function() {
        window.history.back()
    }
}])