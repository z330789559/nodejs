/**
 * Created by Administrator on 2015/8/15.
 */
service.service("PublishCtrlService",['$rootScope','$q','$http','$log',function($rootScope,$q,$http,$log){
    return{
        saveActivity:function(obj){
            var deferred = $q.defer();
            $log.info(obj.activitycatalog);

            $http({
                method: 'POST',
                url: '/activity/add',
                params : obj
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
    }
}]);