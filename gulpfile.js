const gulp = require('gulp')
const del = require('del')
const favicons = require("favicons").stream
const imagemin = require('gulp-imagemin')
const plumber = require('gulp-plumber')
const responsive = require('gulp-responsive')

gulp.task('images', () => {
	return gulp.src('./assets/images/*.{png,jpg,jpeg,gif}')
		.pipe(plumber())
    .pipe(responsive({
      '*': [{
        format: 'webp',
        rename: {extname: ".webp"}
      }, {
        format: 'png',
        rename: {extname: ".png"}
      }],
    }, {
      errorOnUnusedConfig: false,
      allowEmpty: true
    }))
		.pipe(imagemin())
		.pipe(gulp.dest('./docs/.vuepress/public/images'))
})

gulp.task('image-resources', () => {
	return gulp.src('./assets/resources/*.{png,jpg,jpeg,gif}')
		.pipe(plumber())
    .pipe(responsive({'*': [{}]},{
      errorOnUnusedConfig: false,
      allowEmpty: true
    }))
		.pipe(imagemin())
		.pipe(gulp.dest('./docs/.vuepress/public/resources'))
})

gulp.task('other-resources', () => {
	return gulp.src('./assets/resources/!(*.png|*.jpg|*.jpeg|*.gif)')
		.pipe(plumber())
		.pipe(gulp.dest('./docs/.vuepress/public/resources'))
})

gulp.task('favicon', () => {
	return gulp.src('./assets/favicon.png')
		.pipe(plumber())
    .pipe(favicons({
        version: 1.0,
        logging: false,
        pipeHTML: false,
        replace: true,
        url: 'https://itre-docs.netlify.com/',
        icons: {
          android: false,              // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          appleIcon: false,            // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          appleStartup: false,         // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          coast: false,                // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          favicons: true,             // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          firefox: false,              // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          windows: false,              // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          yandex: false
        }
    }))
		.pipe(gulp.dest('./docs/.vuepress/public/'))
})

gulp.task('assets', gulp.series(()=>{
  return del(['./docs/.vuepress/public/**/*.{png,jpg,jpeg,gif,webp,ico}', './docs/.vuepress/public/resources'])
}, 'images', 'image-resources', 'other-resources', 'favicon'))
