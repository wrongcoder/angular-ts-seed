module.exports = function (grunt) {
	"use strict";

	grunt.loadNpmTasks("grunt-angular-templates");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-line-remover");
	grunt.loadNpmTasks("grunt-targethtml");
	grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks("grunt-tsd");

	grunt.registerTask("dev", [ "connect:dev", "tsd", "ts:dev" ]);
	grunt.registerTask("dist", [ "clean", "tsd", "ts:prod", "ngtemplates", "uglify:prod", "less:prod", "targethtml:prod", "lineremover:prod", "copy:dist" ]);
	grunt.registerTask("test", [ "dist", "connect:dist:keepalive" ]);
	grunt.registerTask("default", [ "dev" ]);

	grunt.initConfig({
		ts: {
			options: {
				removeComments: false,
				htmlModuleTemplate: "<%= filename %>",
				htmlVarTemplate: "<%= ext %>",
			},
			dev: {
				baseDir: "app",
				src: [ "app/src/**/*.ts" ],
				reference: "app/reference.ts",
				amdloader: "target/loader.js",
				outDir: "target",
				watch: "app/src",
				options: {
					sourceRoot: ".",
				},
			},
			prod: {
				baseDir: "app/src",
				src: [ "app/src/**/*.ts" ],
				reference: "app/reference.ts",
				out: "target/code.js",
				options: {
					fast: "never",
				},
			},
		},
		tsd: {
			reinstall: {
				options: {
					command: 'reinstall',
					config: 'tsd.json',
				},
			},
		},
		ngtemplates: {
			prod: {
				cwd: "app",
				src: [ "view/**.html" ],
				dest: "target/views.js",
				options: {
					module: "APP",
					htmlmin: {
						collapseBooleanAttributes: true,
						collapseWhitespace: true,
						removeAttributeQuotes: true,
						removeComments: true,
						removeEmptyAttributes: true,
						removeRedundantAttributes: true,
						removeScriptTypeAttributes: true,
						removeStyleLinkTypeAttributes: true,
					},
				},
			},
		},
		uglify: {
			prod: {
				src: [ "target/code.js", "target/views.js" ],
				dest: "target/application.js",
			},
			options: {
				now: new Date(),
				mangle: {
					toplevel: true,
				},
				compress: {
					sequences: true,
					properties: true,
					dead_code: true,
					drop_debugger: true,
					conditionals: true,
					comparisons: true,
					evaluate: true,
					booleans: true,
					loops: true,
					unused: true,
					hoist_funs: true,
					hoist_vars: true,
					if_return: true,
					join_vars: true,
					cascade: true,
					negate_iife: true,
					pure_getters: true,
					drop_console: true,
					warnings: true,
				},
				screwIE8: true,
				sourceMap: true,
				sourceMapIn: [ "target/code.js.map" ],
				banner: "/* \u00A9 <%= uglify.options.now.getFullYear() %> example.com */",
			},
		},
		less: {
			prod: {
				files: {
					"target/style.css": "app/style.less",
				},
				options: {
					strictImports: true,
					strictMath: true,
					strictUnits: true,
					cleancss: true,
				},
			},
		},
		targethtml: {
			prod: {
				files: {
					"target/index.html": "app/index.html",
				},
			},
		},
		lineremover: {
			prod: {
				files: {
					"target/index.html": "target/index.html",
				},
			},
		},
		copy: {
			dist: {
				files: [
					{ expand: true, dest: "target/dist/", cwd: "target", src: [ "index.html", "style.css", "application.js" ] },
					{ expand: true, dest: "target/dist/", cwd: "app", src: [ "static/**" ] },
				],
			},
		},
		connect: {
			options: {
				port: 8080,
				hostname: "*",
				debug: true,
			},
			dev: {
				options: {
					base: [ "app", "target", "target/src" ],
				},
			},
			dist: {
				options: {
					base: [ "target/dist" ],
				}
			},
		},
		clean: {
			clean: [ "target" ],
		},
	});

};
