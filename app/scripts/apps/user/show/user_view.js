define(
  [
    "application", 
    "hbs!tmpl/user"
  ], function(App, user_tmpl){

  App.module("UserApp.View", function(View, App, Backbone, Marionette, $, _){

    View.Content = Backbone.Marionette.ItemView.extend({
      template: user_tmpl
    });

  });

  return App.UserApp.View;
});