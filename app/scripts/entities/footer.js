define(["application", "backbone.picky"], function(App){
  App.module("Entities", function(Entities, App, Backbone, Marionette, $, _){
    
    Entities.Footer = Backbone.Model.extend({
      initialize: function(){
        var selectable = new Backbone.Picky.Selectable(this);
        _.extend(this, selectable);
      }
    });

    Entities.FooterCollection = Backbone.Collection.extend({
      model: Entities.Footer,

      initialize: function(){
        var singleSelect = new Backbone.Picky.SingleSelect(this);
        _.extend(this, singleSelect);
      }
    });

    var initializeFooters = function(){
      Entities.footers = new Entities.FooterCollection([
        { name: "Grid", url: "grid", navigationTrigger: "grid:show" },
        { name: "Screener", url: "screener", navigationTrigger: "screener:show" },
        { name: "Tools", url: "tools", navigationTrigger: "tools:show" },
        { name: "Quicktakes", url: "quicktakes", navigationTrigger: "quicktakes:show" }
      ]);
    };

    var API = {
      getFooters: function(){
        if(Entities.footers === undefined){
          initializeFooters();
        }
        return Entities.footers;
      }
    };

    App.reqres.setHandler("footer:entities", function(){
      return API.getFooters();
    });
  });

  return ;
});
