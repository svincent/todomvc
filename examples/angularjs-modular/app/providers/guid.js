/*global todomvc */
'use strict';

/**
 * Services that generates a RFC 4122 Version 4 compliant GUID
 * 
 * Adapted from the top voted answer written by broofa on 
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
todomvc.factory('guid', function () {
  var GUID_TEMPLATE ='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'; 
  var rGen = null;

  if (angular.isDefined(crypto) && typeof crypto.getRandomValues == 'function') {
    // Modern browsers
    rGen = function() { return crypto.getRandomValues(new Uint8Array(1))[0]%16|0; };
  } else {
    // Legacy fallback
    rGen = function() { return Math.random()*16|0; };
  }

	return function guid() {
    return GUID_TEMPLATE.replace(/[xy]/g, function(c) {
      var r = rGen(),
          v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }
});
