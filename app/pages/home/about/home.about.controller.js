import homeMoudle from '../home.module'

export default angular.module(homeMoudle.name).controller('homeAboutController', function ($scope) {
	$scope.title = 'Home about';
}).name