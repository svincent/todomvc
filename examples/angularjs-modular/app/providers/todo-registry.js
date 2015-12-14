/*global todomvc */
'use strict';

/**
 * 
 */
todomvc.factory('TodoRegistry', function ($q, Storage) {
	// Array used to contain the connonical order of the todos. Necessary because 
	// properties of JS objects have no guarenteed order.
	var todos = [];
	
	var registry = {
		getAll: function getAll() {
			todos = Storage.get();
			return todos;
		},
		
		add: function add(todo) {
			todo.created = Date.now();
			todos.push(todo);
			registry.save();
		},
		
		remove: function remove(todo) {
			var idx = todos.indexOf(todo);
			
			if (idx != -1) {
				todos.splice(idx, 1);
			}
			
			registry.save();
		},
		
		toggle: function toggle(todo) {
			todo.done = !!todo.done;
			registry.save();
		},
		
		save: function save() {
			Storage.put(todos);
		},
	};
	
	return registry;
});
