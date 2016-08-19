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
