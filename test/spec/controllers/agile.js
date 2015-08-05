'use strict';

describe('Controller: AgileCtrl', function () {

  // load the controller's module
  beforeEach(module('kpSangkuriangApp'));

  var AgileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgileCtrl = $controller('AgileCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
