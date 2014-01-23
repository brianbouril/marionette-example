define(["application"], function(App){
  App.module("HomeApp", function(HomeApp, App, Backbone, Marionette, $, _){
    
    HomeApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        "home": "showHome"
      }
    });

    var API = {
      showHome: function(){
        require(["apps/home/show/home_controller"], function(HomeController){
          HomeController.showHome();
        });
      }
    };

    App.on("home:show", function(){
      App.navigate("home");
      API.showHome();
    });

    App.addInitializer(function(){
      new HomeApp.Router({
        controller: API
      });
    });

  }); //end module

  return App.HomeApp;
});
