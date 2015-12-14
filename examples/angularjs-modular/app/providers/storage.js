/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves the application's data from localStorage
 */
todomvc.factory('Storage', function () {
	var STORAGE_ID = 'todos-angularjs-modular';

	return {
		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		put: function (items) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(items));
		}
	};
});
