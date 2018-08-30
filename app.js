const app = angular.module('app', [])
app.controller('myController', function ($scope) {
    $scope.message1 = 'hello1'
    $scope.message2 = 'hello2'
    $scope.change = function () {
        $scope.message1 = '111'
    }
})
app.directive('myDirective', function () {
    return {
        restrict: 'E',
        scope: true,
        template: '<div>' +
            '<ul>' +
            '<li>{{ message1 }} <button ng-click="change()">Change from directive</button></li>' +
            '<li>{{ message2 }}</li>' +
            '</ul>' +
            '</div>',
        controller: function ($scope) {
            $scope.change = function () {
                $scope.message1 = '222'
            }
        }
    }
})