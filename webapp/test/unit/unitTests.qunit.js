/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapdatabinding2/project3/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
