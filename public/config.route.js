app.config(["$routeProvider", function($routeProvider) {

    $routeProvider


        .when("/", {
        templateUrl: "views/view.main.html",
        controller: "main"
    })



    .otherwise({
        redirectTo: "/"
    })



}])