var app = angular.module('myApp', []);

app.controller('RegisterController', ['$scope', function($scope) {

    $scope.register = function() {
        $scope.message = 'Welcome ' + $scope.user.firstname;
    };

}]);