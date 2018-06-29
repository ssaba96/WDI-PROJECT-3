/* global google */

function googleMap() {
  return {
    restrict: 'A',
    template: '<div class="map">GOOGLE MAP HERE</div>',
    replace: true,
    scope: {
      location: '='
    },
    link($scope, $element) {

      const map = new google.maps.Map($element[0], {
        zoom: 15,
        disableDefaultUI: true,
        styles: [
          {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#444444'
              }
            ]
          },
          {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [
              {
                color: '#f2f2f2'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'all',
            stylers: [
              {
                saturation: -100
              },
              {
                lightness: 45
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'all',
            stylers: [
              {
                visibility: 'simplified'
              }
            ]
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'transit',
            elementType: 'all',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: [
              {
                color: '#aad2e3'
              },
              {
                visibility: 'on'
              }
            ]
          }
        ]
      });

      const marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP
      });

      $scope.$watch('location', () => {
        map.setCenter($scope.location);
        marker.setPosition($scope.location);
      });

    }
  };
}

export default googleMap;
