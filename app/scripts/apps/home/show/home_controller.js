define(["application", "apps/home/show/home_view"], function(App, View){
  App.module("HomeApp", function(HomeApp, App, Backbone, Marionette, $, _){
    
    HomeApp.Controller = {
      showHome: function(){
        var home = new View.Content();
        App.mainRegion.show(home);
      }
    }
  });

  return App.HomeApp.Controller;

});