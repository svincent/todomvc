/*global todomvc */
'use strict';

todomvc.directive('todoHeader', function() {
  return {
    bindToController: true,
    templateUrl: '/app/parts/header.html',
    scope: {},
  };
});