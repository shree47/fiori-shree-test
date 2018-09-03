sap.ui.define([
		"com/mycompany/northwind/fiori-shree-test/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.mycompany.northwind.fiori-shree-test.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);