module.exports = function (grunt) {
  var config = {
    options: {
      trueColor: true,
      precomposed: true,
      appleTouchBackgroundColor: "#333333",
      coast: true,
      windowsTile: true,
      tileBlackWhite: false,
      tileColor: "#333333",
      appleTouchPadding: 20,
      firefox: true,
      androidHomescree: true,
      html: 'source/_includes/favicons.html',
      HTMLPrefix: '/',
      indent: ''
    },
    icons: {
      src: 'source/_assets/images/favicon.png',
      dest: 'build/'
    }
  };

  grunt.config.set('favicons', config);
};
