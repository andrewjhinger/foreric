(function () {
    "use strict";
    angular.module('pinterestCheckerApp.controllers').
controller('pinterestLoadingController', ['$scope', function ($scope) {
    $scope.$on('LOAD', function () {
        $scope.loading = true;
    });
    $scope.$on('UNLOAD', function () {
        $scope.loading = false;
    });
}])
}());



