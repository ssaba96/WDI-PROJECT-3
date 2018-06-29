function AuthProfileUpdateCtrl($http, $scope) {

  $http({
    method: 'GET',
    url: '/api/profile'
  })
    .then(res => $scope.museums = res.data);
}

export default AuthProfileUpdateCtrl;
