/*global todomvc */
'use strict';

todomvc.directive('todoList', function(TodoRegistry) {
  return {
    templateUrl: '/app/components/todo-list/todo-list.html',
    replace: true,
    scope: {},
    bindToController: {},
    controllerAs: 'vm',
    controller: function(TodoRegistry) {
      var vm = this;
      
			vm.todos = TodoRegistry.getAll();
    },
  };
});
