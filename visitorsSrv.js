angular.module('app').service('visitorsSrv', function ($http) {

   var visitorData = [13, 43, 65, 367, 86, 45, 35, 76, 234, 45, 8, 45, 23, 65, 43, 13, 43, 65, 367, 86, 45, 35, 76, 234, 45, 8, 45, 23, 65, 43]

   this.allVisitorInfo = () => {
        return visitorData
   }



})