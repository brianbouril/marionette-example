define(
  [
    "application", 
    "hbs!tmpl/reports"
  ], function(App, reports_tmpl){

  App.module("ReportsApp.View", function(View, App, Backbone, Marionette, $, _){

    View.Content = Backbone.Marionette.ItemView.extend({
      template: reports_tmpl
    });

  });

  return App.ReportsApp.View;
});