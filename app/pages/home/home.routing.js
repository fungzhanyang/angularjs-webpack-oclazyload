import angular from 'angular';

function homeRouting($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	$stateProvider
		.state("home", {
			url: "/home",
			templateProvider: ($q) => {
				return $q((resolve) => {
					require.ensure([], () => resolve(require('./home.html')));
				});
			},
			controller: 'homeController',
			resolve: {
				deps: ($q, $ocLazyLoad) => {
					return $q((resolve) => {
						require.ensure([], () => {
							import('./home.controller').then(module => {
								$ocLazyLoad.load({ name: module.default });
								resolve(module);
							})
						});
					});
				}
			}
		})
		.state("home.about", {
			url: "/about",
			templateProvider: ($q) => {
				return $q((resolve) => {
					require.ensure([], () => resolve(require('./about/home.about.html')));
				});
			},
			controller: 'homeAboutController',
			resolve: {
				deps: ($q, $ocLazyLoad) => {
					return $q((resolve) => {
						require.ensure([], () => {
							import('./about/home.about.controller').then(module => {
								$ocLazyLoad.load({ name: module.default });
								resolve(module);
							})
						});
					});
				}
			}
		})
}


export default angular.module("home.routing", []).config(homeRouting)