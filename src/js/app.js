/**
 * Created by Adam on 2/14/2015.
 */
var chapter2 = angular.module('chapter2', ['ngRoute', 'ui.bootstrap', 'hljs', 'ngSanitize']);

chapter2.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'lessonOneController',
        templateUrl: 'views/lesson-one.html'
    }).when('/lesson-two', {
        controller: 'lessonTwoController',
        templateUrl: 'views/lesson-two.html'
    }).when('/lesson-three', {
        controller: 'lessonThreeController',
        templateUrl: 'views/lesson-three.html'
    }).when('/lesson-four', {
        controller: 'lessonFourController',
        templateUrl: 'views/lesson-four.html'
    }).when('/lesson-five', {
        controller: 'lessonFiveController',
        templateUrl: 'views/lesson-five.html'
    }).when('/lesson-six', {
        controller: 'lessonSixController',
        templateUrl: 'views/lesson-six.html'
    }).when('/lesson-seven-a', {
        controller: 'lessonSevenAController',
        templateUrl: 'views/lesson-seven-a.html'
    }).when('/lesson-seven-b', {
        controller: 'lessonSevenBController',
        templateUrl: 'views/lesson-seven-b.html'
    }).when('/lesson-seven-c', {
        controller: 'lessonSevenCController',
        templateUrl: 'views/lesson-seven-c.html'
    }).otherwise({ redirectTo: '/'});
    
}]);