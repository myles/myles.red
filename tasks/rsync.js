module.exports = function (grunt) {
    var config = {
        options: {
					args: ["--verbose"],
					recursive: true
        },
        prod: {
        	options: {
        		src: "./build/",
        		dest: "/srv/www/myles.red/www/html",
        		host: "bear",
        		port: "22",
        		delete: true,
        	}
        }
    };
    
    grunt.config.set('rsync', config);
};
