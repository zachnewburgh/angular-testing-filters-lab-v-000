describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should filter female results correctly', function() {
      var $scope = {};
      $controller('ContactController as vm', {$scope: $scope});

      $scope.vm.search = 'female';
      $scope.vm.changeFilter();
      expect($scope.vm.filteredList.length).toEqual(71);
    });

    it('should filter Manchester results correctly', function() {
      var $scope = {};
      $controller('ContactController as vm', {$scope: $scope});

      $scope.vm.search = 'Manchester'
      $scope.vm.changeFilter();
      expect($scope.vm.filteredList.length).toEqual(8);
    })
});
