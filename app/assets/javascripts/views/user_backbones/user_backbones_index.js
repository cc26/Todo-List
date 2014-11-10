
Todo.Views.UserBackbonesIndex = Backbone.View.extend({
  el: "#user_form_template",
  template: JST['user_backbones/userform'],

  events:{
  	'submit #signup-user-form':'saveUser',
    'click #signin':'showForm',
    'click #signup':'showForm'
  },

  showForm:function(event){
    var formId = "#"+event.currentTarget.id+"-user-form";
    $(formId).show();
  },

  saveUser: function(event){

  	event.preventDefault();
  	var cur = event.currentTarget;


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
  }
});
