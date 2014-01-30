define([
	'backbone',
	'communicator',
	'handlebars'
],

function( Backbone, Communicator, Handlebars ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add base application regions here */
	App.addRegions({
		footerRegion: '#footer-region',
		mainRegion: '#main-region'
	});

	// Wrapper for backbone navigate
	App.navigate = function(route, options){
		options || (options = {});
		Backbone.history.navigate(route, options);
	};

	// Helper method for getting current route of app
	App.getCurrentRoute = function(){
		return Backbone.history.fragment
	}

	/* Add initializers here */
	App.on("initialize:after", function () {

		if(Backbone.history){
			require(["apps/home/home_app", "apps/user/user_app", "apps/reports/reports_app"], function(){
				Backbone.history.start();

				if(App.getCurrentRoute() === ""){
					App.trigger("home:show");
				}
			});
		}

		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
