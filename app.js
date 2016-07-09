var app = angular.module('Stoop', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test = 'Hello Guys';
	}]);