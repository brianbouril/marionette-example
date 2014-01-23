define(
  [
    "application", 
    "hbs!tmpl/dropdown_list_item",
    "hbs!tmpl/header"
  ], function(App, DDListItem, HeaderNav_tmpl){

  App.module("HeaderApp.View", function(View, App, Backbone, Marionette, $, _){

    View.Header = Marionette.ItemView.extend({
      template: DDListItem,
      tagName: "li",

      events: {
        "click a": "navigate"
      },

      navigate: function(e){
        e.preventDefault();
        this.trigger("navigate", this.model);
      },

      onRender: function(){
        if(this.model.selected){
          // add class so Bootstrap will highlight the active entry in the navbar
          this.$el.addClass("active");
        };
      }
    });

    View.Headers = Marionette.CompositeView.extend({
      template: HeaderNav_tmpl,
      className: "navbar navbar-inverse navbar-fixed-top",
      itemView: View.Header,
      itemViewContainer: ".dropdown-menu",

      events: {
        "click a#userBtn": "userClicked"
      },

      userClicked: function(e){
        e.preventDefault();
        this.trigger("user:clicked");
      }
    });

  });

  return App.HeaderApp.View;
});