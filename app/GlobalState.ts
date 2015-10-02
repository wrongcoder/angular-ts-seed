///<reference path="../target/typings/tsd.d.ts"/>

export { GlobalState as default }

export interface GlobalState {
	number: number;
}

export class GlobalStateImpl implements GlobalState {
	number: number = 3;
}
