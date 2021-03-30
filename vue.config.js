// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: 'example/src/main.ts',
      template: 'example/public/index.html',
      filename: 'index.html',
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      // key,value自行定义，比如.set('@assets', resolve('src/assets'))
      .set('v-form-engine', path.resolve(__dirname, 'src/index.ts'));
  },
};
