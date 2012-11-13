/*global module:false*/
module.exports = function(grunt) {

        grunt.loadNpmTasks('grunt-requirejs');
        grunt.loadNpmTasks('grunt-contrib-yuidoc');
        grunt.loadNpmTasks('grunt-mocha');

        // Project configuration.
        grunt.initConfig({
                pkg: '<json:package.json>',
                meta: {
                        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                                '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
                                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                                ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
                },
                requirejs: {
                        baseUrl: "src",
                        include: [
                                "arrayDiff"
                        ],
                        exclude: [],
                        out: "dist/build.js",
                        wrap: {
                                startFile: "wrap/wrap.start",
                                endFile: "wrap/wrap.end"
                        },
                        findNestedDependencies: true
                },
                lint: {
                        files: [
                                'src/*.js',
                                'test/*.js'
                        ]
                },
                min: {
                        dist: {
                                src: ['<banner:meta.banner>', '<config:requirejs.out>'],
                                dest: 'dist/<%= pkg.name %>.min.js'
                        }
                },
                mocha: {
                        all: [ 
                                'test/test.html'
                        ]
                },
                watch: {
                        files: '<config:lint.files>',
                        tasks: 'doc lint requirejs min'
                },
                jshint: {
                        options: {
                                curly: true,
                                eqeqeq: true,
                                immed: true,
                                latedef: true,
                                newcap: true,
                                noarg: true,
                                sub: true,
                                undef: true,
                                boss: true,
                                eqnull: true,
                                browser: true
                        },
                        globals: {
                               "define": true, // for require.js
                               "describe": true // for mocha 
                        }
                },
                yuidoc: {
                        compile: {
                                "name": '<%= pkg.title || pkg.name %>',
                                "description": '<%= pkg.description %>',
                                "version": '<%= pkg.version %>',
                                "url": '<%= pkg.homepage %>',
                                options: {
                                        paths: '<config:requirejs.baseUrl>',
                                        outdir: 'docs',
                                        blockHelper: true
                                }
                        }
                }
        });

        // Behavior test
        grunt.registerTask('test', 'mocha');

        // Create API documnet
        grunt.registerTask('doc', 'yuidoc');

        // Default task.
        grunt.registerTask('default', 'lint requirejs min doc');

};
