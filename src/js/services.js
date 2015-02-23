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