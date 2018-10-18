const root = process.cwd();
const { resolve } = require('path');

module.exports = {
    src: resolve(root, 'src'),
    temp: resolve(root, '.temp'),
    dist: resolve(root, 'dist'),
    prepack: resolve(root, '.temp/prepack')
};
