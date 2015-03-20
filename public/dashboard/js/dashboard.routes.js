angular.module('dashboardApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'dashboard/views/home.view.html',
        controller: 'dashboardCtrl'
      })
      .when('/note', {
        templateUrl: 'dashboard/views/editor.view.html',
        controller: 'editorCtrl'
      })
      .otherwise('/');
  }]).run(function ($rootScope, $window) {
      $rootScope.$on('$routeChangeSuccess', function () {
        console.log("$routeChangeSuccess!");
        $window.scrollTo(0, 0);
      });
  });