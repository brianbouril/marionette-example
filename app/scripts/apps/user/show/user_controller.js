define(["application", "apps/user/show/user_view"], function(App, View){
  App.module("UserApp", function(UserApp, App, Backbone, Marionette, $, _){
    
    UserApp.Controller = {
      show: function(){
        var user = new View.Content();
        App.mainRegion.show(user);
      }
    }
  });

  return App.UserApp.Controller;

});