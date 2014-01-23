define(["application"], function(App){
  App.module("HeaderApp", function(HeaderApp, App, Backbone, Marionette, $, _){
    var API = {
      showHeader: function(){
        require(["apps/header/nav/nav_controller"], function(NavController){
          NavController.showHeader();
        });
        
      }
    };

    App.commands.setHandler("set:active:header", function(name){
      App.HeaderApp.Controller.setActiveHeader(name);
    });

    HeaderApp.on("start", function(){
      API.showHeader();
    });
  });

  return App.HeaderApp;
});
