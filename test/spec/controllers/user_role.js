'use strict';

describe('Controller: UserRoleCtrl', function () {

  // load the controller's module
  beforeEach(module('kpSangkuriangApp'));

  var UserRoleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserRoleCtrl = $controller('UserRoleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
