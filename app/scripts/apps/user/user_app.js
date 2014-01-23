define(["application"], function(App){
  App.module("UserApp", function(UserApp, App, Backbone, Marionette, $, _){
    
    UserApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        "user": "show"
      }
    });

    var API = {
      show: function(){
        require(["apps/user/show/user_controller"], function(UserController){
          UserController.show();
        });
      }
    };

    App.on("user:show", function(){
      App.navigate("user");
      API.show();
    });

    App.addInitializer(function(){
      new UserApp.Router({
        controller: API
      });
    });

  }); //end module

  return App.UserApp;
});
