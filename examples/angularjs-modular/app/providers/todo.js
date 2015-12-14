/*global todomvc */
'use strict';

/**
 * 
 */
todomvc.factory('Todo', function (guid) {
	function Todo(options) {
		this._id = options.id || guid();
		this._value = options.value;
		this._done = !!options.done;
	}

	Todo.prototype.toggle = function toggle() {
		this._done = !this.done;
	};

	Todo.prototype.complete = function complete() {
		this._done = true;
	};
	
	Todo.prototype.incomplete = function incomplete() {
		this._done = false;
	};
	
	

	return function(opts) {
		return new Todo(opts);
	};
});
