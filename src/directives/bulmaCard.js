function bulmaCard() {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: './views/directives/bulmaCard.html',
    scope: {
      image: '=',
      title: '=',
      subtitle: '=',
      content: '='
    }
  };
}

export default bulmaCard;
