/**
 * Created by Administrator on 2015/7/31.
 */
controller.controller('activityList', ['$scope',"activityListService",function($scope,activityListService) {
    $scope.title="活动列表";
    $scope.num=activityListService.num;



}]);