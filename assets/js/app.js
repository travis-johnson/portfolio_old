var mainApp = angular.module ("mainApp", ["ngRoute"]);

mainApp.config(function($routeProvider){
  $routeProvider


  .when( '/about',{
    templateUrl: 'assets/pages/about.html'
  })
  .when( '/main',{
    templateUrl: 'assets/pages/main.html'
  })
  .otherwise({
    redirectTo: '/about'
  });

});
