var gulp = require('gulp');
var exec = require('child_process').exec;
gulp.task('icon2fonts', function () {

	exec( 'mkdir -p dist/',
  	function (error, sdtout, stderr) {
  		if (error){
  			console.log('exec mkdir with error::'+error);
  			return;
  		} else{
  			console.log('directory ready!!!');
  		}
  	});

  return exec( 'icon-font-generator icons/**/*.svg -o dist/',
  	function (error, sdtout, stderr) {
  		if (error){
  			console.log('exec generator with error::'+error);
  			return;
  		} else{
  			console.log('generation correct!!!');
  		}
  	});
});
