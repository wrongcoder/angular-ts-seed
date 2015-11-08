///<reference path=".types.d.ts"/>

export { GlobalState as default }

export interface GlobalState {
	number: number;
}

export class GlobalStateImpl implements GlobalState {
	number: number = 3;
}
