require([
	'backbone',
  'handlebars',
	'application',
	'regionManager'
],
function ( Backbone, Handlebars, App ) {
    'use strict';

  Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
    return Handlebars.compile(rawTemplate);
  };


  require(["application", "apps/header/header_app"], function(App){
    App.start();
  });

});
