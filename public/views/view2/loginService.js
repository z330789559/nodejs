/**
 * Created by Administrator on 2015/8/9.
 */
service.service("loginService",['$rootScope','$q','$http','$log',function($rootScope,$q,$http,$log){
     return{
         doLogin:function(obj){
             var deferred = $q.defer();
             $http(
                 {
                     method: 'POST',
                     url: '/doLogin',
                     params : obj
                 }).success(function (response) {
                     deferred.resolve(response);
                 })
                 .error(function (response) {
                     deferred.reject(response);
                 });

             return deferred.promise;
         }

     }
}]);