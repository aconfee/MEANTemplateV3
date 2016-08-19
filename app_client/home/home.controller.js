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
