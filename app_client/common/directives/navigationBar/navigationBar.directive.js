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
