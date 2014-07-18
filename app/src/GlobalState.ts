/// <reference path="../reference.ts" />

module Application {

	// As a service, this class is exported because its
	// definition could be useful from outside of this file.

	export class GlobalState {
		number: number = 3;
	}

	app.service("g", GlobalState);

}
