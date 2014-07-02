/// <reference path="../reference.ts" />

module Application {
	var Application = angular.module("Application", []);
	Application.service("g", GlobalState);
	Application.controller("RootController", RootController);
	Application.controller("HelloWorldController", HelloWorldController);
	angular.element(document).ready(() => angular.bootstrap(document, ["Application"]));
}
