/*global todomvc */
'use strict';

todomvc.directive('todoHeader', function() {
  return {
    templateUrl: '/app/components/app-header/app-header.html',
    replace: true,
    scope: {},
    bindToController: {},
    controllerAs: 'vm',
    controller: function() {},
  };
});
