function homeRouting($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	console.log('as');

	$stateProvider
		.state("home", {
			url: "/home",
			template: require('./home.html'),
			controller: 'homeController',
			resolve: {
				loadController: ($q, $ocLazyLoad) => {

					return $q((resolve) => {
						require.ensure([], () => {
							// load whole module
							let module = require('./home.controller');
							$ocLazyLoad.load({ name: module.name });
							resolve(module);
						});
					});
				}
			}
		})
		.state("home.about", {
			url: "/about",
			template: require('./about/home.about.html'),
			controller: 'homeAboutController',
			resolve: {
				loadController: ($q, $ocLazyLoad) => {

					return $q((resolve) => {
						require.ensure([], () => {
							let module = require('./about/home.about.controller');
							$ocLazyLoad.load({ name: module.name });
							resolve(module);
						});
					});
				}
			}
		})
}


module.exports = angular.module("home.routing", []).config(homeRouting)