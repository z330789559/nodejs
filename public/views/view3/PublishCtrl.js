/**
 * Created by Administrator on 2015/8/9.
 */
controller.controller('publishCtrl', ["$scope","PublishCtrlService",function($scope,PublishCtrlService) {
    $scope.caption="标题";
    $scope.publishman="张三";
    $scope.publiDate=new Date();
    $scope.activityStart=new Date();
    $scope.subscriplimittime=new Date();
    $scope.activityCity="徒步吴越";
    $scope.activitylimitperson="20";
    $scope.costfee="500";
    $scope.activitycatalog="徒步";
    $scope.content="";
    $scope.disable=false;
    $scope.activityDescription="duwqeiuqwwwwwwwwww";
    $scope.submit=function(){
        debugger;
        $scope.content=encodeURIComponent(window.con);
        $scope.disable=false;
        var parmas={
            caption: $scope.caption,
            publishman: $scope.publishman,
            publiDate:$scope.publiDate,
            activityStart: $scope.activityStart,
            subscriplimittime:$scope.subscriplimittime,
            content:$scope.content,
            activitycatalog:$scope.activitycatalog,
            activityDescription: $scope.activityDescription,
            costfee:$scope.costfee
        };
        if(!$scope.content.trim()){
            $scope.disable=true;
            return false;
        }
        PublishCtrlService.saveActivity(parmas);
    }
    $scope.$watch("content",function(newvalue){
        console.log(newvalue);
    });
}]);