/// <reference path="../../reference.ts" />

/*
 * Late application initialization
 */
module Application {
	angular.element(document).ready(() => angular.bootstrap(document, [appModule]));
}
