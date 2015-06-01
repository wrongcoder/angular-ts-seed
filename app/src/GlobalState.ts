/// <reference path="../reference.ts" />

module Application {

	export interface GlobalState {
		number: number;
	}

	class GlobalStateImpl implements GlobalState {
		number: number = 3;
	}

	app.service("g", GlobalStateImpl);

}
