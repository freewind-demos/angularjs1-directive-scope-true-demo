const app = angular.module('app', [])
app.controller('myController', function ($scope) {
    $scope.hello = 'hello myController'
})
app.directive('myDirective', function () {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element, attrs) {
            console.log(scope.hello)
        }
    }
})