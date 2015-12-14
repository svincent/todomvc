/*global todomvc */
'use strict';

todomvc.directive('todoList', function(TodoRegistry) {
  return {
    bindToController: true,
    templateUrl: '/app/parts/todo-list.html',
    scope: {},
    controllerAs: 'vm',
    controller: function(TodoRegistry) {
      var vm = this;
      
			vm.todos = TodoRegistry.getAll();
    },
  };
});