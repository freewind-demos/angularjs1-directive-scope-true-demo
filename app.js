const app = angular.module('app', [])
app.controller('myController', function ($scope) {
    $scope.controllerName = '(myController)'
})
app.directive('myDirective', function () {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element, attrs) {
            scope.message = 'message added by myDirective'
            console.log('myDirective added message to scope of: ' + scope.controllerName)
        }
    }
})