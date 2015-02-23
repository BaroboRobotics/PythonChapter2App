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
