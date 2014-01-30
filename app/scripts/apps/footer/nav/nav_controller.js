define(["application", "apps/footer/nav/nav_view"], function(App, View){
  App.module("FooterApp", function(FooterApp, App, Backbone, Marionette, $, _){
    FooterApp.Controller = {
      
      showFooter: function(){
        require(["entities/footer"], function(){
          var links = App.request("footer:entities");
          var footers = new View.Footers({collection: links});

          footers.on("user:clicked", function(){
            App.trigger("user:show");
          });

          footers.on("itemview:navigate", function(childView, model){
            var trigger = model.get("navigationTrigger");
            App.trigger(trigger);
          });

          App.footerRegion.show(footers);
        });
      },

      setActiveFooter: function(footerUrl){
        var links = App.request("footer:entities");
        var footerToSelect = links.find(function(footer){ return footer.get("url") === footerUrl; });
        footerToSelect.select();
        links.trigger("reset");
      }

    };
  });

  return App.FooterApp.Controller;
});