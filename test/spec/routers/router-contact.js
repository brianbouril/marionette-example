(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/router-contact'
		],
		function( RouterContact ) {

			describe('RouterContact Router', function () {

				it('should be an instance of RouterContact Router', function () {
					var router-contact = new RouterContact();
					expect( router-contact ).to.be.an.instanceof( RouterContact );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );