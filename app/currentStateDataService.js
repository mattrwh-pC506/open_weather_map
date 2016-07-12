app.filter("fahreinheit", function() {
  return function(kelvin) {
    var f = kelvin * (9/5) - 459.67;
    return f.toFixed(2);
  }
})

app.factory("CurrentStateDataService", function() {
	return {
		forecasts: {}
	};
});
