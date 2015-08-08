/**
 * Created by Administrator on 2015/8/5.
 */
controller.controller("activityDetailController",["$scope","$stateParams",function($scope,$stateParams){

          console.log($stateParams);
           $scope.activityId=$stateParams.activityId;

}]);