///<reference path="../.types.d.ts"/>

import GlobalState from '../GlobalState';

export default class HelloWorldController {
	private g: GlobalState;

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
