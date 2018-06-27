function ProfileShowCtrl($scope, $state, $http, $rootScope) {
  $scope.data = {};

  $http({
    method: 'GET',
    url: `/api/profile/${$state.params.userId}`
  })
    .then(res => $scope.user = res.data);

  $scope.$watch('data.avatar', () => {
    if(!$scope.data.avatar) return false;
    $http({
      method: 'PUT',
      url: `/api/profile/${$state.params.userId}`,
      data: {
        avatar: $scope.data.avatar
      }
    })
      .then(res => {
        $rootScope.$broadcast('currentUser', res.data);
        $scope.user = res.data;
      });
  });
}

export default ProfileShowCtrl;
