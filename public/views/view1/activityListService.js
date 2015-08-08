/**
 * Created by Administrator on 2015/7/31.
 */
service.service("activityListService",['$rootScope','$q','$http','$log',function($rootScope,$q,$http,$log){
return{
    num:2,
    getActivityList:function(params){

        var deferred = $q.defer();

        $http({
            method: 'POST',
            url: '/activity/add',
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
    }

};

}]);