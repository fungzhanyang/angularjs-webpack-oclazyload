
require('./home.module')

module.exports = angular.module('home').controller('homeController', function homeController($scope) {
	$scope.title ='home';
	
})

