function AuthProfileCtrl($scope, $auth, $state) {
  $scope.data = {};

  $scope.handleSubmit = function() {
    $auth.signup($scope.data)
      .then(() => $state.go('profile'));
  };
}

export default AuthProfileCtrl;
