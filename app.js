const app = angular.module('app', [])
app.controller('myController', function ($scope) {
    $scope.message = 'hello, myController'
    $scope.controllerName = '(myController)'
})
app.directive('myDirective', function () {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, element, attrs) {
            scope.message = 'hello, myDirective'
        }
    }
})