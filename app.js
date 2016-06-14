angular.module('itemApp', [])
.controller('ItemController', function($scope) {
  $scope.editing = false;
  $scope.items = [
    { name: 'Food'},
    { name: 'More Food'}
  ];
  $scope.item = { name: '', errors: [] };
  $scope.addItem = function() {
    if ($scope.item.name.trim() !== '') {
      $scope.formError = false;
      $scope.items.push($scope.item);
      $scope.item = { name: '', errors: [] };
    }
    else {
      $scope.item.errors.push('Whoops, you forgot to add an item!');
    }
  }
  $scope.removeLastItem = function() {
    $scope.items.pop();
  }
  $scope.editItem = function(item) {
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
