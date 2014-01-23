define(
  [
    "application", 
    "hbs!tmpl/home"
  ], function(App, home_tmpl){

  App.module("HomeApp.View", function(View, App, Backbone, Marionette, $, _){

    View.Content = Backbone.Marionette.ItemView.extend({
      template: home_tmpl
    });

  });

  return App.HomeApp.View;
});