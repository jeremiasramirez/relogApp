app.config(["$routeProvider", function($routeProvider) {

    $routeProvider


        .when("/", {
        templateUrl: "views/view.main.html",
        controller: "main"
    })

    .when("/:", {
        templateUrl: "views/view.main.html",
        controller: "main"
    })

    .when("/choose", {
        templateUrl: "views/view.controllerChoose.html",
        controller: "choose"
    })

    .when("/choose/es", {
        templateUrl: "views/view.controllerES.html",
        controller: "es"
    })

    .when("/choose/en", {
        templateUrl: "views/view.controllerEN.html",
        controller: "en"
    })



    .otherwise({
        redirectTo: "/"
    })



}])