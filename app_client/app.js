/*
* Angular application.
*/

(function(){

  // Define the app module and it's dependencies.
  angular.module('exampleApp', ['ngRoute']);

  // Create a config for our app -- configure our routes.
  function config ($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.view.html',
        controller: 'homeController',
        controllerAs: 'viewModel'
      })
      .when('/about', {
        templateUrl: 'about/about.view.html',
        controller: 'aboutController',
        controllerAs: 'viewModel'
      })
      .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }

  // Add the config to our app.
  angular
    .module('exampleApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();
