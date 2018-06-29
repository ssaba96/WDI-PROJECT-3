function secureState($q, $state, $auth, $rootScope) {
  return new $q(resolve => {
    if($auth.isAuthenticated()) return resolve();

    $rootScope.$broadcast('flashMessage', {
      type: 'warning',
      content: 'Please log in'
    });

    $state.go('login');
  });
}

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'HomeCtrl'
    })
    .state('profileShow', {
      url: '/profile/:userId',
      templateUrl: './views/auth/profileShow.html',
      controller: 'ProfileShowCtrl',
      resolve: { secureState }
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
