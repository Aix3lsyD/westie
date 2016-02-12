'use strict';

angular.module('clientApp').factory('WCSUser', function($resource){
  return $resource('/api/user/:id');
});
