app.controller('ForecastsController', [
    '$scope', '$route', '$location', 'CurrentStateDataService',
    function($scope, $route, $location, CurrentStateDataService) {

    	$scope.sort_field = 'dt';
  		$scope.reverse_sort_sfield = false;
  		$scope.today = new Date();

    	$scope.forecasts = CurrentStateDataService.forecasts;

    	$scope.reset = function() {
    		CurrentStateDataService.forecasts = {};
	        $location.path('/');
    	}
    	
    }
]);

app.controller('HomeController', ["$scope", '$location', 'openWeatherMapApiService', 'CurrentStateDataService', function($scope, $location, openWeatherMapApiService, CurrentStateDataService) {
	$scope.about = "Search below to get your next 16 daily forecasts!"
	$scope.search = function() {
		openWeatherMapApiService.getDailyForecast($scope.city, $scope.country_code)
	        .then(function(result) {
	            CurrentStateDataService.forecasts = result;
	            $location.path('/search/forecasts/daily');
	        });
	    };

}]);