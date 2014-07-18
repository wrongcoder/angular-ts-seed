/// <reference path="../reference.ts" />

module Application {

	export class GlobalState {
		number: number = 3;
	}

	app.service("g", GlobalState);

}
