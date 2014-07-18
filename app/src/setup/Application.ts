/// <reference path="../../reference.ts" />

/*
 * Early application initialization and module-level dependency injection
 */
module Application {

	// This must match the ngtemplates module in Gruntfile.js
	export var appModule: string = "APP";

	export var app: ng.IModule = angular.module(appModule, []);

}
