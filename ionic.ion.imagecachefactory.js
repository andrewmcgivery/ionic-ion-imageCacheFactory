angular.module('ionic.ion.imageCacheFactory', ['ionic'])

.factory("$ImageCacheFactory", function($q,$timeout){
	return {
		Cache: function(urls){
			var promises = [];
			for(i=0;i<urls.length;i++){
				var deferred = $q.defer();
				var img = new Image();
				img.onload = (function(deferred){
					return function(){
						deferred.resolve();
					}
				})(deferred);
				
				img.onerror = (function(deferred,url){
					return function(){
						deferred.reject(url);
					}
				})(deferred,urls[i]);

				promises.push(deferred.promise);
				img.src = urls[i];
			}
			return $q.all(promises);
		}
	}
});
