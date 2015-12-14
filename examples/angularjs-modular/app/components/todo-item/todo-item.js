/*global todomvc */
'use strict';

todomvc.directive('todoItem', function() {
  return {
    templateUrl: '/app/components/todo-item/todo-item.html',
    replace: true,
    scope: {},
    bindToController: {
      todo: "=item"
    },
    controllerAs: 'vm',
    
    controller: function($element, TodoRegistry) {
      var vm = this;
      
      vm.startEdit = function startEdit() {
        vm.editing = true;
        vm.original = angular.copy(vm.todo);
      };
      
      vm.finishEdit = function finishEdit() {
        // Abandon ship if we've already stopped editing! This can happen either
        // because the form has been submitted or we've aborted the edit.
        if (!vm.editing) { return; }
        
        vm.editing = false;
        vm.original = null;
        
        if (!vm.todo.value) {
          vm.remove();
        } else {
          TodoRegistry.save();
        }
      };
      
      vm.abortEdit = function abortEdit() {
        vm.editing = false;
        vm.todo = angular.copy(vm.original);
        // NOTE: finishEdit() will be called because of the blur event binding
      };
      
      vm.toggle = function toggle() {
        TodoRegistry.toggle(vm.todo);
      };
      
      vm.remove = function remove() {
        TodoRegistry.remove(vm.todo);
      };
    },
  };
});
