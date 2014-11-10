
Todo.Views.UserContent = Backbone.View.extend({
    el: "#container",
    template: JST['user_backbones/usercontent'],

    events:{

    },

    render: function(model){

        $(this.el).html(this.template({user:model}));
        return this;
    }
});
