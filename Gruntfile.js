module.exports = function(grunt) {
	grunt.initConfig({
		aws: grunt.file.readJSON('.aws.json'),
		config: grunt.file.readYAML('_config.yml'),
		
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
		exec: {
			encrypt: {
				cmd: "gpg --encrypt --armor -r <%= config.gpg_key => --batch --yes --trust-model always -o .aws.json.gpg .aws.json"
			},
			decrypt: {
				cmd: "gpg --decrypt --armor -r <%= config.gpg_key => --batch --yes --trust-model always -o .aws.json .aws.json.gpg"
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
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-jekyll');
	
	grunt.registerTask('default', ['jekyll:build']);
	grunt.registerTask('run', ['jekyll:serve']);
	grunt.registerTask('deploy', ['jekyll:build', 's3'])
};