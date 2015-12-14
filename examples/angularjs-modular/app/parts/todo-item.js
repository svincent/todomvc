/*global todomvc */
'use strict';

todomvc.directive('todoItem', function() {
  return {
    bindToController: true,
    templateUrl: '/app/parts/todo-item.html',
    scope: {
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
    
    link: function(scope, element, attributes) {
      var completedWatch = scope.$watch('vm.todo.done', function(newValue) {
        element.toggleClass('completed', newValue);
      });
      
      var editWatch = scope.$watch('vm.editing', function(newValue) {
        element.toggleClass('editing', !!newValue);
      }); 
      
      scope.$on('$destroy', function cleanup() {
        completedWatch();
      })
    },
  };
});