function HomeCtrl($http, $scope) {

  $http({
    method: 'GET',
    url: '/api/museums'
  })
    .then(res => $scope.museums = res.data.slice(0,3));
}

export default HomeCtrl;
