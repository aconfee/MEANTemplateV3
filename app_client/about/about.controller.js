angular
  .module('exampleApp')
  .controller('aboutController', aboutController);

aboutController.$inject = ['$scope'];
function aboutController($scope){
  var viewModel = this;

  viewModel.myVariable = "I'm pretty cool, I guess.";
}
