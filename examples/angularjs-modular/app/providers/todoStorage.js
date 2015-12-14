/*global angular */

/**
 * Services that persists and retrieves todos from localStorage.
 *
 */
todomvc.factory('TodoStorage', function ($q, Storage) {
	'use strict';

	var store = {
		todos: [],

		upsert: function (todo) {
			store.todos.push(todo);
			Storage.save(store.todos);

			return $q.when(store.todos);
		},
		
		remove: function (todo) {
			store.todos.splice(store.todos.indexOf(todo), 1);
			Storage.save(store.todos);

			return $q.when(store.todos);
		},

		get: function () {
			angular.copy(Storage.get(), store.todos);

			return $q.when(store.todos);
		},

		update: function (todo) {
			store.todos[todo.id] = todo;
			Storage.save(store.todos);

			return $q.when(store.todos);
		},
		
		clearCompleted: function () {
			var incompleteTodos = store.todos.filter(function (todo) {
				return !todo.completed;
			});

			angular.copy(incompleteTodos, store.todos);
			Storage.save(store.todos);

			return $q.when(store.todos);
		},
	};

	return store;
});