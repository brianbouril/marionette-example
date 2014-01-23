define(["application", "apps/header/nav/nav_view"], function(App, View){
  App.module("HeaderApp", function(HeaderApp, App, Backbone, Marionette, $, _){
    HeaderApp.Controller = {
      
      showHeader: function(){
        require(["entities/header"], function(){
          var links = App.request("header:entities");
          var headers = new View.Headers({collection: links});

          headers.on("user:clicked", function(){
            App.trigger("user:show");
          });

          headers.on("itemview:navigate", function(childView, model){
            var trigger = model.get("navigationTrigger");
            App.trigger(trigger);
          });

          App.headerRegion.show(headers);
        });
      },

      setActiveHeader: function(headerUrl){
        var links = App.request("header:entities");
        var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
        headerToSelect.select();
        links.trigger("reset");
      }

    };
  });

  return App.HeaderApp.Controller;
});