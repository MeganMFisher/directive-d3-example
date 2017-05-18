angular.module('app')
  .directive('visitorsBar', function () {

    return {
    templateUrl: 'index.html',
    restrict: 'E',
    scope: {
    //   lesson: '=',
    //   dayAlert: '&'
    },
    controller: function( $scope, visitorsSrv) {
      $scope.visitors = visitorsSrv.allVisitorInfo();
      console.log($scope.visitors)
    }

  }
 
  })