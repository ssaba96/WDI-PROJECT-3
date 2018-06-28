function MuseumsShowCtrl($scope, $http, $state) {

  $scope.data = {};

  $http({
    method: 'GET',
    url: `/api/museums/${$state.params.id}`
  })
    .then(res => {
      $scope.museum = res.data;
    });

  $scope.createReview = function() {
    $http({
      method: 'POST',
      url: `/api/museums/${$state.params.id}/reviews`,
      data: $scope.data
    })
      .then(res => {
        $scope.museum = res.data;
        $scope.data = {};
      });
  };
}

export default MuseumsShowCtrl;
