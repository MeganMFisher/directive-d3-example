 
angular.module('app').controller('visitorsCtrl', function ($scope, visitorsSrv) {

      $scope.getVisitorsInfo = function(){
        $scope.graphVisitorData = visitorsSrv.allVisitorInfo();
        console.log($scope.graphVisitorData)
    }

    $scope.getVisitorsInfo();

})