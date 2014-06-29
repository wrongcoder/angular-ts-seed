angular-ts-seed
========================================

This is a starting point for building [AngularJS](https://angularjs.org/)
projects in [TypeScript](http://www.typescriptlang.org/).

Development
----------------------------------------

You must have <a href="http://nodejs.org/">NodeJS</a> installed.

	$ npm install -g grunt-cli
	$ npm install
	$ grunt dev

	Started connect web server on http://0.0.0.0:8080

Open <a href="http://localhost:8080/">http://localhost:8080/</a>
and begin development.

Distribution
----------------------------------------

	$ grunt dist
	$ rsync -a target/dist/ webhost:/var/www/site.example.com/
