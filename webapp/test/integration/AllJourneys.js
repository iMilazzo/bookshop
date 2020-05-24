jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 BooksSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"bookshop/bookshop/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"bookshop/bookshop/test/integration/pages/App",
	"bookshop/bookshop/test/integration/pages/Browser",
	"bookshop/bookshop/test/integration/pages/Master",
	"bookshop/bookshop/test/integration/pages/Detail",
	"bookshop/bookshop/test/integration/pages/Create",
	"bookshop/bookshop/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "bookshop.bookshop.view."
	});

	sap.ui.require([
		"bookshop/bookshop/test/integration/MasterJourney",
		"bookshop/bookshop/test/integration/NavigationJourney",
		"bookshop/bookshop/test/integration/NotFoundJourney",
		"bookshop/bookshop/test/integration/BusyJourney",
		"bookshop/bookshop/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});