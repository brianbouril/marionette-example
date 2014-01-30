define(["application", "hbs!tmpl/contAndCont_layout"], function(App, contAndCont_tmp){

	return Backbone.Marionette.Layout.extend({
	  template: contAndCont_tmp,

	  regions: {
	    content: "#content-region",
      	controller: "#controller-region"
	  }
	});

});