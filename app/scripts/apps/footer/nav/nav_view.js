define(
  [
    "application", 
    "hbs!tmpl/dropdown_list_item",
    "hbs!tmpl/footer"
  ], function(App, DDListItem, FooterNav_tmpl){

  App.module("FooterApp.View", function(View, App, Backbone, Marionette, $, _){

    View.Footer = Marionette.ItemView.extend({
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

    View.Footers = Marionette.CompositeView.extend({
      template: FooterNav_tmpl,
      className: "navbar navbar-inverse navbar-fixed-bottom",
      itemView: View.Footer,
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

  return App.FooterApp.View;
});