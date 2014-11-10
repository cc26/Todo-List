
Todo.Routers.UserBackbones = Backbone.Router.extend({
	routes:{
		"":"index"
	},

	index: function(){
		var signupView = new Todo.Views.UserBackbonesIndex();
		signupView.render();
		console.log("rendering");
	}
});