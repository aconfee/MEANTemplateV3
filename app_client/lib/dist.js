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

angular
  .module('exampleApp')
  .controller('homeController', homeController);

homeController.$inject = ['$scope'];
function homeController($scope){
  var viewModel = this;

  viewModel.exampleData = {
    exampleItem: 'Example text from home controller being passed to example-directive.'
  };
}

angular
  .module('exampleApp')
  .controller('aboutController', aboutController);

aboutController.$inject = ['$scope'];
function aboutController($scope){
  var viewModel = this;

  viewModel.myVariable = "I'm pretty cool, I guess.";
}

(function(){
  angular
    .module('exampleApp')
    .directive('navigationBar', navigationBar);

  function navigationBar(){
    return{
      restrict:'EA',
      templateUrl: '/common/directives/navigationBar/navigationBar.directive.html'
    };
  }
})();

(function(){
  angular
    .module('exampleApp')
    .directive('exampleDirective', exampleDirective);

  function exampleDirective(){
    return{
      restrict:'EA',
      scope:{
        content: '=content'
      },
      templateUrl: '/common/directives/exampleDirective/example.directive.html'
    };
  }
})();
