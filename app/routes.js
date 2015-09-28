app.config([
'$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "./templates/home.html",
            controller: 'HomeController'
        })
        .when("/search/forecasts/daily", {
            templateUrl: "./templates/forecasts.html",
            controller: "ForecastsController"
        })
        .when("/error", {
            templateUrl: "./templates/error.html"
        })
        .otherwise({
            redirectTo: '/'
        });


}]);