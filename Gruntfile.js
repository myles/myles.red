module.exports = function(grunt) {
	grunt.initConfig({
		aws: grunt.file.readJSON('.aws.json'),
		
		s3: {
			options: {
				accessKeyId: "<%= aws.accessKeyId %>",
				secretAccessKey: "<%= aws.secretAccessKey %>",
				bucket: "myles.red"
			},
			build: {
				cwd: "build",
				src: "**"
			}
		},
		jekyll: {
			options: {
				bundleExec: true,
				config: '_config.yml'
			},
			build: {},
			serve: {
				options: {
					serve: true
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-aws');
	grunt.loadNpmTasks('grunt-jekyll');
	
	grunt.registerTask('default', ['jekyll:build']);
	grunt.registerTask('run', ['jekyll:serve']);
	grunt.registerTask('deploy', ['jekyll:build', 's3'])
};