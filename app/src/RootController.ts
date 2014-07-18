/// <reference path="../reference.ts" />

module Application {

	class RootController {
		private $templateCache: ng.ITemplateCacheService;
		private $timeout: ng.ITimeoutService;

		view: string = "helloWorld";

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "$templateCache", "$timeout" ];

		constructor($templateCache: ng.ITemplateCacheService, $timeout: ng.ITimeoutService) {
			this.$templateCache = $templateCache;
			this.$timeout = $timeout;
		}

		reloadTemplates(): void {
			var view = this.view;
			this.$timeout(() => this.view = view, 0);
			this.$templateCache.removeAll();
			this.view = undefined;
		}
	}

	app.controller("RootCtrl", RootController);

}
