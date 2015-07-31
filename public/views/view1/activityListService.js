/**
 * Created by Administrator on 2015/7/31.
 */
service.service("activityListService",['$rootScope','$q','$http','$log',function($rootScope,$q,$http,$log){
    this.scope=$rootScope;
    this.log=$log;
    this.num=2;
    this.getActivityList=function(params){
       console.log(params);
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: '/acitivity',
            params : params
        })
            .success(function (response) {
                service.loginToken = [];
                deferred.resolve(response);
            })
            .error(function (response) {
                deferred.reject(response);
            });

        return deferred.promise;
    };
}]);