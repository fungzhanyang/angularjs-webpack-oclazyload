var gulp = require('gulp');        //加载gulp服务
var path = require('path');        
var runSequence = require('run-sequence');     //加载run-sequence服务
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var debug = require('gulp-debug');
var changed = require('gulp-changed');


gulp.task('hello', function () {
	console.log('Hello World!');
});
gulp.task('useLess', function () {
	var path = './app/**/*.less';
	var target = 'dist'
	return gulp.src(path)
		.pipe(changed(target, { extension: '.css' }))
		.pipe(debug({ title: '编译:' }))
		.pipe(less())
		.pipe(gulp.dest(target));
});
gulp.task('useStylus', function () {
	var src = ['app/**/*.stylus', '!app/dist/**'];
	var target = 'dist'

	return gulp.src(src)
		.pipe(changed(target, {
				extension: '.css',
				transformPath: newPath => path.resolve(path.join(target, path.basename(newPath)))
			})
		)
		.pipe(debug({ title: '编译:' }))
		.pipe(stylus())
		.pipe(rename({
			dirname: ''
		}))
		.pipe(gulp.dest(target))
});

gulp.task('watch', function () {
	w('./app/**/*.less', 'useLess');
	w('./app/**/*.stylus', 'useStylus');

	function w(path, task) {
		watch(path, function () {
			gulp.start(task);
			browserSync.reload();
		});
	}
});

gulp.task('serve', function () {      //编写服务功能
	return browserSync.init({
		server: {               //本地服务器启动配置
			baseDir: './app/'             //启动服务时执行代码路径
		},
		port: 8000,             //启动服务端口
	});
});

gulp.task('start', function () {
	gulp.start(['useLess', 'useStylus', 'serve', 'watch'])
})