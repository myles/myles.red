module.exports = function (grunt) {
    var config = {
		encrypt: {
			cmd: "gpg --encrypt --armor -r <%= config.gpg_key => --batch --yes --trust-model always -o .aws.json.gpg .aws.json"
		},
		decrypt: {
			cmd: "gpg --decrypt --armor -r <%= config.gpg_key => --batch --yes --trust-model always -o .aws.json .aws.json.gpg"
		}
    };
    
    grunt.config.set('exec', config);
};
