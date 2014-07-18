/// <reference path="../reference.ts" />

module Application {

	class HelloWorldController {
		g: GlobalState;

		//noinspection JSUnusedGlobalSymbols
		static $inject = [ "g" ];

		constructor(g: GlobalState) {
			this.g = g;
		}

		increment(): void {
			this.g.number += 1;
		}

		decrement(): void {
			this.g.number -= 1;
		}

		getNumber(): number {
			return this.g.number;
		}
	}

	app.controller("HelloWorldCtrl", HelloWorldController);

}
