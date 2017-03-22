sap.ui.define([
	"Bcsoft/Candidate/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("Bcsoft.Candidate.controller.NotFound", {

		/**
		 * Navigates to the worklist when the link is pressed
		 * @public
		 */
		onLinkPressed: function() {
			this.getRouter().navTo("worklist");
		}

	});

});