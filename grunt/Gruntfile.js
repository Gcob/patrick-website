module.exports = function(grunt) {
	
	var lessTasks = ['less', 'autoprefixer', 'cssmin', 'beep:1'];
	var assets = '../symfony/web/assets';
	
	// Project configuration.
	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	
		less: {
			production: {
				src:  assets + '/less/core/index.less',
				dest: assets + '/css/style.raw.css'
			}
		},

		autoprefixer: {
			production: {
				src:  assets + '/css/style.raw.css',
				dest: assets + '/css/style.prefix.css',
				options: {
					cascade: false,
					browsers: ['last 5 versions']
				}
			}
		},
		
		cssmin: {
			production: {
				src:  assets + '/css/style.prefix.css',
				dest: assets + '/css/style.min.css'
			}
		},
		
		watch: {
			styles: {
				files: [assets + '/less/**/*.less'],
				tasks: lessTasks,
				options: {
					spawn: false,
				}
			}
		}
		
		
	});
	
	//error does a notification
	grunt.event.on('jshint:fail', function() {
		grunt.warn(); 
	});
	
	//load modules
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-beep');
	
	//tasks
	grunt.registerTask('compileCss', lessTasks);
	grunt.registerTask('c', lessTasks);
	grunt.registerTask('autoCompileCss', ['watch']);
	grunt.registerTask('ac', ['watch']);
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
};