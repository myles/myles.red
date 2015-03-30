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
			},
			podcasts: {
				cwd: "podcasts",
				src: "**",
				dest: "podcasts/"
			}
		},
		rsync: {
			options: {
				args: ["--verbose"],
				recursive: true
			},
			prod: {
				options: {
					src: "./build/",
					dest: "/srv/www/red_myles_www/html",
					host: "myles@panda.mylesbraithwaite.com",
					port: "2222",
					delete: true,
				}
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
			build: {
				options: {
					build: true
				}
			},
			serve: {
				options: {
					serve: true,
					auto: true
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-aws');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-rsync');
	grunt.loadNpmTasks('grunt-jekyll');
	
	grunt.registerTask('run', ['jekyll:serve']);
	grunt.registerTask('build', ['jekyll:build']);
	grunt.registerTask('deploy', ['build', 's3:build', 'rsync:prod']);
	grunt.registerTask('push_podcasts', ['s3:podcasts'])
	
	grunt.registerTask('default', ['build']);
};