/*global todomvc */
'use strict';

todomvc.directive('todoInput', function(TodoRegistry) {
  return {
    templateUrl: '/app/components/todo-input/todo-input.html',
    scope: {},
    bindToController: {},
    controllerAs: 'vm',
    controller: function(TodoRegistry) {
      var vm = this;
			
      vm.addTodo = function addTodo() {
        var newTodo = {
          value: vm.value.trim(),
          done: false,
        };
        
        if (!newTodo.value) {
          return;
        }
        
        TodoRegistry.add(newTodo);
        
        // Clear out the user-specified value to make way for a new todo 
        vm.value = '';
      };
    },
  };
});
