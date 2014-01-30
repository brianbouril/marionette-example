define(["application", "apps/reports/show/reports_layout"], function(App, ReportsLayout){
  App.module("ReportsApp", function(ReportsApp, App, Backbone, Marionette, $, _){
    
    ReportsApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        "reports": "show"
      }
    });

    var API = {
      show: function(){
        // require(["apps/reports/show/reports_controller"], function(ReportsController){
        //   ReportsController.show();
        // });
        App.mainRegion.show(new ReportsLayout());
      }
    };

    App.on("reports:show", function(){
      App.navigate("reports");
      API.show();
    });

    App.addInitializer(function(){
      new ReportsApp.Router({
        controller: API
      });
    });

  }); //end module

  return App.ReportsApp;
});
