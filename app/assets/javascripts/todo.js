window.Todo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    var router = new Todo.Routers.UserBackbones();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Todo.initialize();
});
