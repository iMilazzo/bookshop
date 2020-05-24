jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"bookshop/bookshop/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"bookshop/bookshop/test/integration/pages/App",
	"bookshop/bookshop/test/integration/pages/Browser",
	"bookshop/bookshop/test/integration/pages/Master",
	"bookshop/bookshop/test/integration/pages/Detail",
	"bookshop/bookshop/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "bookshop.bookshop.view."
	});

	sap.ui.require([
		"bookshop/bookshop/test/integration/NavigationJourneyPhone",
		"bookshop/bookshop/test/integration/NotFoundJourneyPhone",
		"bookshop/bookshop/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});