define(["application", "apps/reports/show/reports_view"], function(App, View){
  App.module("ReportsApp", function(ReportsApp, App, Backbone, Marionette, $, _){
    
    ReportsApp.Controller = {
      show: function(){
        var report = new View.Content();
        App.mainRegion.show(report);
      }
    }
  });

  return App.ReportsApp.Controller;

});