
Todo.Views.UserBackbonesIndex = Backbone.View.extend({
  el: "#user_form_template",
  template: JST['user_backbones/userform'],

  events:{
  	'submit #signup-user-form':'saveUser',
    'submit #signin-user-form':'loginUser',

      'click #signin':'showForm',
    'click #signup':'showForm'
  },

  showForm:function(event){
    var formId = "#"+event.currentTarget.id+"-user-form";
    $(formId).show();
  },


  loginUser: function(event){
      event.preventDefault();
      var cur = event.currentTarget;


      var values = {};
      for(var i = 0; i < cur.length; i++){
          if(cur[i].type != "submit"){
              values[cur[i].name] = cur[i].value;
          }
      }

      sessions.create(values,{
          error : function(model, response){
              console.log(model);
              console.log(response);
          },
          success: function(model, response){
               if(response['errors']){
                   console.log(response);
                   $('#error').html(response['errors']);

               }else {
                   var userContentView = new Todo.Views.UserContent();
                   userContentView.render(response);
               }
          }
      });
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
	
	users.create(values,{
        error : function(model, response){
            console.log("having error");

            console.log(model);
            console.log(response);
        },
        success: function(model, response){
            if(response['errors']){
                console.log(response);
                $('#error').html(response['errors']);

            }else {
                var userContentView = new Todo.Views.UserContent();
                userContentView.render(response);
            }
        }
    });

  },

  render: function(){
      $(this.el).html(this.template());
      
      return this;
  }
});
