function ProfileShowCtrl($scope, $http, $state) {

  $scope.data = {};


  $http({
    method: 'GET',
    url: `/api/${$state.params.id}`
  })
    .then(res => {
      $scope.museum = res.data;
    });
}

export default ProfileShowCtrl;
