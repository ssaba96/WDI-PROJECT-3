function MuseumsShowCtrl($scope, $http, $state) {

  $scope.data = {};


  $http({
    method: 'GET',
    url: `/api/museums/${$state.params.id}`
  })
    .then(res => {
      $scope.museum = res.data;
    });
}

export default MuseumsShowCtrl;
