function MuseumsIndexCtrl($scope, $http, $stateParams) {
  $scope.search = $stateParams.search || '';
  $scope.sort = 'name';

  $http({
    method: 'GET',
    url: '/api/museums'
  })
    .then(res => $scope.museums = res.data);
}

export default MuseumsIndexCtrl;
