///<reference path="../typings/tsd.d.ts"/>

import * as GlobalState from './GlobalState';
import HelloWorldController from './helloWorld/HelloWorldController';
import RootController from './RootController';

const appModule = "APP";
const app = angular.module(appModule, []);

app.service('g', GlobalState.GlobalStateImpl);
app.controller('HelloWorldCtrl', HelloWorldController);
app.controller('RootCtrl', RootController);

angular.element(document).ready(() => angular.bootstrap(document, [appModule]));
