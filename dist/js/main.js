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
    }).when('/lesson-seven', {
        controller: 'lessonSevenController',
        templateUrl: 'views/lesson-seven.html'
    }).when('/lesson-eight-a', {
        controller: 'lessonEightAController',
        templateUrl: 'views/lesson-eight-a.html'
    }).when('/lesson-eight-b', {
        controller: 'lessonEightBController',
        templateUrl: 'views/lesson-eight-b.html'
    }).when('/lesson-eight-c', {
        controller: 'lessonEightCController',
        templateUrl: 'views/lesson-eight-c.html'
    }).otherwise({ redirectTo: '/'});
    
}]);
/**
 * Created by Adam on 2/14/2015.
 */
chapter2.controller('lessonOneController', ['$scope', '$timeout', '$interval', 'robotFactory', function($scope, $timeout, $interval, robotFactory) {
    var intervalRef = null;
    function stopAcquisition() {
        $interval.cancel(intervalRef);
        intervalRef = null;
    }
    function getRobot() {
        console.log('attempting robot acquisition');
        $scope.m.robot = robotFactory.getRobot1();
        if ($scope.m.robot !== null) {
            stopAcquisition();
            $scope.m.robotId = $scope.m.robotId;
        }
    }
    $scope.m = {
        buzzerFrequency: 1046.5,
        sleep1: 1.5,
        sleep2: 3,
        led1: 255,
        led2: 0,
        led3: 0,
        robotId: '',
        displayAllCode: false,
        robot: null,
        running: false
    };
    $scope.change = function(e) {
        console.log(e.target);
        console.log('Buzzer frequencey: ' + $scope.m.buzzerFrequency);
    };
    $scope.toggle = function() {
        $scope.m.displayAllCode = !$scope.m.displayAllCode;
    };
    $scope.run = function() {
        if ($scope.m.robot === null) {
            return;
        }
        var freq, sleep1, sleep2, led1, led2, led3;
        freq = $scope.m.buzzerFrequency;
        sleep1 = $scope.m.sleep1;
        sleep2= $scope.m.sleep2;
        led1 = $scope.m.led1;
        led2 = $scope.m.led2;
        led3 = $scope.m.led3;
        $scope.m.running = true;
        robot.buzzerFrequency(freq);
        $timeout(function() {
            robot.buzzerFrequency(0);
            $timeout(function() {
                robot.color(led1, led2, led3);
                $scope.m.running = false;
            }, sleep2);
        }, sleep1);
        console.log('Run Clicked');
    };
    $scope.stopAcquisition = function() {
        stopAcquisition();
    };
    if ($scope.m.robot === null) {
        intervalRef = $interval(getRobot, 1000);
    }

}]).controller('lessonTwoController', ['$scope', '$timeout', function($scope, $timeout) {


}]).controller('lessonThreeController', ['$scope', '$timeout', function($scope, $timeout) {


}]).controller('lessonFourController', ['$scope', '$timeout', function($scope, $timeout) {


}]).controller('lessonFiveController', ['$scope', '$timeout', function($scope, $timeout) {


}]).controller('lessonSixController', ['$scope', '$timeout', function($scope, $timeout) {


}]).controller('lessonSevenController', ['$scope', '$timeout', function($scope, $timeout) {


}]).controller('lessonEightAController', ['$scope', '$timeout', function($scope, $timeout) {


}]).controller('lessonEightBController', ['$scope', '$timeout', function($scope, $timeout) {


}]).controller('lessonEightCController', ['$scope', '$timeout', function($scope, $timeout) {


}]);

/**
 * Created by Adam on 2/22/2015.
 */
chapter2.directive('contenteditable', ['$sce', function($sce) {
    return {
        restrict: 'A', // only activate on element attribute
        require: '?ngModel', // get a hold of NgModelController
        link: function(scope, element, attrs, ngModel) {
            if (!ngModel) return; // do nothing if no ng-model

            // Specify how UI should be updated
            ngModel.$render = function() {
                element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
            };

            // Listen for change events to enable binding
            element.on('blur change', function() {
                scope.$evalAsync(read);
            });
            read(); // initialize
            // Write data to the model
            function read() {
                var html = element.html();
                // When we clear the content editable the browser leaves a <br> behind
                // If strip-br attribute is provided then we strip this out
                if ( attrs.stripBr && html == '<br>' ) {
                    html = '';
                }
                if (isNaN(html)) {
                    html = parseFloat(html.replace(/[^0-9\.]+/g, ''));
                    ngModel.$setViewValue(html);
                    element.html(html);
                } else {
                    ngModel.$setViewValue(html);
                }
            }
        }
    };
}]);

/**
 * Created by Adam on 2/22/2015.
 */
chapter2.factory('robotFactory', [function() {
    var robot1 = null;
    var robot2 = null;
    var robotFactory = {};
    robotFactory.getRobot1 = function() {
        if (robot1 === null) {
            var acquired = Linkbots.acquire(1);
            if (acquired.robots.length === 1) {
                robot1 = acquired.robots[0];
            }
        }
        return robot1;
    };
    robotFactory.getRobot2 = function() {
        if (robot2 === null) {
            var acquired = Linkbots.acquire(1);
            if (acquired.robots.length === 1) {
                robot2 = acquired.robots[0];
            }
        }
        return robot2;
    };

    return robotFactory;
}]);