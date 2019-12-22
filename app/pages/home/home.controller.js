
import homeMoudle from './home.module'

export default angular.module(homeMoudle.name).controller('homeController', function homeController($scope) {
	$scope.title ='home';
	console.log('home ctrl');
	
}).name

