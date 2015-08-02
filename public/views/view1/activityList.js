/**
 * Created by Administrator on 2015/7/31.
 */
controller.controller('activityList', ['$scope',"$location","$log",'$stateParams',"activityListService",function($scope,$location,$log,$stateParams,activityListService) {
    $scope.title="活动列表";
    $scope.num=activityListService.num;
    $log.info($location.search());
   $scope.startcity=$stateParams.startcity;

}]);