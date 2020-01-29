app.controller("en", ["$scope", "$routeParams", function($scope, $routeParams) {

    $scope.choose = "klk en";

    $scope.backButton = function() {
        window.history.back()
    }
}])