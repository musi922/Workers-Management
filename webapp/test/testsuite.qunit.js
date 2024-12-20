sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: workersWebsite",
		defaults: {
			page: "ui5://test-resources/workersWebsite/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "workersWebsite/",
				never: "test-resources/workersWebsite/"
			},
			loader: {
				paths: {
					"workersWebsite": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for workersWebsite"
			},
			"integration/opaTests": {
				title: "Integration tests for workersWebsite"
			}
		}
	};
});
