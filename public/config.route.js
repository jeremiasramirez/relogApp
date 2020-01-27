app.config(["$routeProvider", function($routeProvider) {

    $routeProvider


        .when("/", {
        templateUrl: "views/view.main.html",
        controller: "main"
    })

    .when("/countries", {
        templateUrl: "views/countries.controller.html",
        controller: "countries"
    })

    .otherwise({
        redirectTo: "/"
    })


    console.log($routeProvider)
}])