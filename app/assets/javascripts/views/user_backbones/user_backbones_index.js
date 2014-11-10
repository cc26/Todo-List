
Todo.Views.UserBackbonesIndex = Backbone.View.extend({
  el: "#user_form_template",
  template: JST['user_backbones/index'],

  events:{
  	'submit .new_user-form':'saveUser'
  },
  saveUser: function(event){
  	event.preventDefault();	
  	var cur = event.currentTarget;
  	console.log(cur[1].type =="submit" );
  	var values = {};
  	for(var i = 0; i < cur.length; i++){
  		if(cur[i].type != "submit"){
  			values[cur[i].name] = cur[i].value;	
  		}
  	}
	
	users.create(values);    
  },

  render: function(){
      $(this.el).html(this.template());
      
      return this;
  },
});
