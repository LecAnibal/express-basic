var gulp = require('gulp');
var exec = require('child_process').exec;
gulp.task('icon2fonts', function () {





  return exec( 'npm install -g icon-font-generator',
           	function (error, sdtout, stderr) {
           		if (error){
           			console.log('exec install with error::'+error);
           			return;
           		} else{
           			console.log('install ready!!!');
           			exec( 'mkdir -p dist/',
                       	function (error, sdtout, stderr) {
                       		if (error){
                       			console.log('exec mkdir with error::'+error);
                       			return;
                       		} else{
                       			console.log('directory ready!!!');
                       			exec( 'icon-font-generator icons/**/*.svg -o dist/',
                                   	function (error, sdtout, stderr) {
                                   		if (error){
                                   			console.log('exec generator with error::'+error);
                                   			return;
                                   		} else{
                                   			console.log('generation correct!!!');
                                   		}
                                   	});
                       		}
                       	});
           		}
           	});
});
