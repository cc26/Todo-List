
Todo.Collections.UserBackbones = Backbone.Collection.extend({
	url: '/users'
});

var users = new Todo.Collections.UserBackbones();