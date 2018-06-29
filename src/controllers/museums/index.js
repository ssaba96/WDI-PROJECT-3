function MuseumsIndexCtrl($http, $scope) {

  $http({
    method: 'GET',
    url: '/api/museums'
  })
    .then(res => $scope.museums = res.data);
}

export default MuseumsIndexCtrl;
