(function () {
    "use strict";
    angular.module('pinterestCheckerApp.controllers', []).
  controller('pinterestController', ['$scope', '$http', function ($scope, $http) {

      $scope.submitUrl = function submitUrl(pinterestUser, pinterestBoard) {
          if (pinterestUser != null && pinterestBoard != null) {
              $scope.$emit('LOAD');
              $scope.wepapitUrl = "http://localhost:3441/api/PinterestUrl/" + pinterestUser + "/" + pinterestBoard;
              $http.get($scope.wepapitUrl).then(function (response) {
                  if (response.data != null) {
                      $scope.promoCode = response.data;
                      $scope.successfulCheck = true;
                      $scope.$emit('UNLOAD');
                  }
                  else {
                      $scope.successfulCheck = false;
                      $scope.$emit('UNLOAD');
                  }
              });
          }
      }
  }])
}());

