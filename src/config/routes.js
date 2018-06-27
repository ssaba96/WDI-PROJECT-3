function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('profileShow', {
      url: '/profile/:chavez',
      templateUrl: './views/auth/profileShow.html',
      controller: 'ProfileShowCtrl'
    })
    .state('profileEdit', {
      url: '/profile/edit',
      templateUrl: './views/auth/profileEdit.html'
    })
    .state('museumsIndex', {
      url: '/museums',
      templateUrl: './views/museums/index.html',
      controller: 'MuseumsIndexCtrl',
      params: { search: null }
    })
    .state('museumsShow', {
      url: '/museums/:id',
      templateUrl: './views/museums/show.html',
      controller: 'MuseumsShowCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/auth/login.html',
      controller: 'AuthLoginCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: './views/auth/register.html',
      controller: 'AuthRegisterCtrl'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
