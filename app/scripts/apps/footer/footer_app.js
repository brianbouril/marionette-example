define(["application"], function(App){
  App.module("FooterApp", function(FooterApp, App, Backbone, Marionette, $, _){
    var API = {
      showFooter: function(){
        require(["apps/footer/nav/nav_controller"], function(NavController){
          NavController.showFooter();
        });
        
      }
    };

    App.commands.setHandler("set:active:header", function(name){
      App.FooterApp.Controller.setActiveFooter(name);
    });

    FooterApp.on("start", function(){
      API.showFooter();
    });
  });

  return App.FooterApp;
});
