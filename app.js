angular.module('itemApp', [])
.controller('ItemController', function($scope) {
  $scope.editing = false;
  $scope.items = [
    { name: 'Test'},
    { name: 'More Test'}
  ];
  $scope.item = { name: ''};
  $scope.addItem = function() {
      $scope.formError = false;
      $scope.items.push($scope.item);
      $scope.item = { name: ''}
  }
  $scope.removeLastItem = function() {
    $scope.items.pop();
  }
  $scope.editItem = function(item) {
    $scope.formError = false;
    $scope.editing = true;
    $scope.item = item;
  }
  $scope.updateItem = function() {
    $scope.item = {};
    $scope.editing = false;
  }
  $scope.removeItem = function(index) {
    $scope.items.splice(index, 1);
  }
});
