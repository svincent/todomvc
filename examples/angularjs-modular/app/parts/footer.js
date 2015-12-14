/*global todomvc */
'use strict';

todomvc.directive('todoFooter', function() {
  return {
    bindToController: true,
    templateUrl: '/app/parts/footer.html',
    scope: {},
  };
});