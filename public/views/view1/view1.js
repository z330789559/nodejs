'use strict';


controller.controller('View1Ctrl',['$scope',"$log","$location","activityListService",function($scope,$log,$location,activityListService) {
    $scope.startcity="上海";
    $scope.startTime="2015-12-07";
    $scope.days="2";
    $scope.costfee="100-500";
    $scope.activityList=[];
    $scope.actvityItem={
        activityTitle:"",
        actvityDate:"2015-12-07",
        activtyStartCity:"上海",
        activityDays:2,
        actvityId:"",
        costfee:"",
        activityResume:"",
        activityHeaderImgUrl:""
    };
    $scope.params={
        startcity:$scope.startcity,
        startTime: $scope.startTime,
        days: $scope.days,
        costfee:$scope.costfee
    };

    $scope.showActivityList=function(){
       var promise= activityListService.getActivityList($scope.params);

        promise.then(function success(data) {
                $scope.status=false;
                $log.info(data);
                $scope.activityList=  JSON.stringify(data);
                $scope.redirectToList();
            },
            function fail(error) {
                $log.info(error);
             });
      };
        $scope.redirectToList = function () {
            $location.path("index/activityList/"+$scope.startcity+"/"+$scope.startTime+"/"+$scope.days+"/"+$scope.costfee);
        }
}]);