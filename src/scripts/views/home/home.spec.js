describe('home view', function () {

  var scope;
  var ctrl;
   
  beforeEach(module('rivercity'));

  beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('homeController', { $scope: scope });
  }));

  it('should render hello world', function(){
    expect(scope.hello).toEqual('Hello Tuan!');
  });

});
