function MainCtrl($scope, $auth, $state, $rootScope, $timeout, $transitions, $http) {
  $scope.isAuthenticated = $auth.isAuthenticated;
  $scope.navbarOpen = false;

  if($auth.isAuthenticated()) {
    $http({
      method: 'GET',
      url: `/api/profile/${$auth.getPayload().sub}`
    })
      .then(res => $scope.currentUser = res.data);
  }

  $transitions.onSuccess({}, () => {
    $scope.navbarOpen = false;
    $scope.isHomepage = $state.$current.name === 'home';
  });

  $rootScope.$on('flashMessage', (e, data) => {
    $scope.flashMessage = data;

    $timeout(() => $scope.flashMessage = null, 4000);
  });

  $rootScope.$on('currentUser', (e, data) => {
    $scope.currentUser = data;
  });

  $scope.toggleMenu = function() {
    $scope.navbarOpen = !$scope.navbarOpen;
  };

  $scope.logout = function() {
    $auth.logout();
    $state.go('home');
  };
}

export default MainCtrl;
