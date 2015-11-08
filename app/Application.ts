///<reference path=".types.d.ts"/>

import { GlobalStateImpl } from './GlobalState';
import HelloWorldController from './helloWorld/HelloWorldController';
import RootController from './RootController';

const appModule = "APP";
const app = angular.module(appModule, []);

app.service('g', GlobalStateImpl);
app.controller('HelloWorldCtrl', HelloWorldController);
app.controller('RootCtrl', RootController);

angular.element(document).ready(() => angular.bootstrap(document, [appModule]));
