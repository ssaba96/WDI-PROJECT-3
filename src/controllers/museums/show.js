function MuseumsShowCtrl($scope, $http, $state) {

  $scope.data = {};

  $scope.deleteMuseum = function() {
    $http({
      method: 'DELETE',
      url: `/api/museums/${$state.params.id}`
    })
      .then(() => $state.go('museumsIndex'));
  };


  $http({
    method: 'GET',
    url: `/api/museums/${$state.params.id}`
  })
    .then(res => {
      $scope.museum = res.data;

      return $http({
        method: 'GET',
        url: '/api/forecast',
        params: { lat: $scope.museum.location.lat, lng: $scope.museum.location.lng }
      });
    })
    .then(res => $scope.forecast = res.data);
}

export default MuseumsShowCtrl;
