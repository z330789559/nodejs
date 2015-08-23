/**
 * Created by Administrator on 2015/7/31.
 */
controller.controller('activityList', ['$scope',"$location","$log",'$stateParams',"activityListService",function($scope,$location,$log,$stateParams,activityListService) {
    $scope.title="活动列表";
    $scope.num=activityListService.num;
    $scope.startcity=$stateParams.startcity;
    $scope.startTime=$stateParams.startTime;
    $scope.days=$stateParams.days;
    $scope.costfee=$stateParams.costfee;

    $scope.getactivities=function(){
        $scope.params={
            startcity:$scope.startcity,
            startTime: $scope.startTime,
            days: $scope.days,
            costfee:$scope.costfee
        };
        var promise= activityListService.getActivityList($scope.params);

        promise.then(function success(data) {
                $scope.status=false;
                $log.info(data);
                $scope.activityList=  JSON.stringify(data);

            },
            function fail(error) {
                $log.info(error);
            });
    };

    $scope.redirectToDetail=function(data){
        $location.path("index/activityDetail/"+data);
    }

}]);