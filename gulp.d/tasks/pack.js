'use strict'

const ospath = require('path')
const vfs = require('vinyl-fs')
const zip = require('gulp-vinyl-zip')

module.exports = (src, dest, bundleName, onFinish) => () =>
  vfs
    .src('**/*', { base: src, cwd: src, dot: true })
    .pipe(zip.dest(ospath.join(dest, `${bundleName}-bundle.zip`)))
    .on('finish', () => onFinish && onFinish(ospath.resolve(dest, `${bundleName}-bundle.zip`)))
