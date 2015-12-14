/*global todomvc */
'use strict';

todomvc.directive('todoMain', function() {
  return {
    bindToController: true,
    templateUrl: '/app/parts/main.html',
    scope: {},
  };
});