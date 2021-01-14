/* eslint-disable */
const vue = require('rollup-plugin-vue')
const rollup = require('rollup')
const chalk = require('chalk')
const path = require('path')
const json = require('@rollup/plugin-json')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { terser } = require('rollup-plugin-terser')
const { default: babel, getBabelOutputPlugin } = require('@rollup/plugin-babel')
const cjs = require('@rollup/plugin-commonjs')
const typescript = require('rollup-plugin-typescript2')
const pkg = require('../package.json')

const deps = Object.keys(Object.assign({}, pkg.dependencies, pkg.devDependencies))
const foldPath = path.resolve(__dirname, `..`)
const input = path.resolve(foldPath, 'src/index.ts')
const outputConfig = {
  'esm': {
    format: 'esm',
    file: path.resolve(foldPath, `dist/${pkg.name}.esm.js`),
  },
  'umd': {
    format: 'umd',
    file: path.resolve(foldPath, `dist/${pkg.name}.js`),
    name: pkg.name,
    globals: {
      'vue': 'Vue'
    },
    exports: "named"
  }
}

const runBuild = async () => {
  const outputKeyList = Object.keys(outputConfig);
  let index = 0;

  build(outputKeyList[index])

  async function build(name) {
    if (!name) return
    const extPlugins = name === 'esm' ? [] : [
      cjs({
        // 开启混合模式转换
        transformMixedEsModules: true,
        sourceMap: false
      }),
    ];

    const extTerserOpt = name === 'esm' ? {
      compress: {
        pure_getters: true
      },
      format: {
        comments: false,
      },
      ecma: 2015,
    } : {}
    const outOptions = outputConfig[name]
    const inputOptions = {
      input,
      plugins: [
        typescript(),
        nodeResolve({
          extensions: ['.mjs', '.js', '.json', '.node', '.vue'],
        }),
        vue({
          target: 'browser',
          css: false,
        }),
        babel({ 
          babelHelpers: 'runtime', 
          extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
        }),
        json(),
        ...extPlugins,
        terser(
          Object.assign({
            mangle: false,
            toplevel: true,
            safari10: true
          }, extTerserOpt)
        ),
      ],
      external(id) {
        return name === 'umd' ? /^vue$/.test(id) : deps.some(k => new RegExp('^' + k).test(id))
      },
    }

    console.log(chalk.blue(input + ' → ' + outOptions.file + '...'))
    console.time(chalk.green('create ' + outOptions.file + ' done'))

    const bundle = await rollup.rollup(inputOptions)
    const { output } = await bundle.generate(outOptions)

    console.timeEnd(chalk.green('create ' + outOptions.file + ' done'))

    await bundle.write(outOptions)
    index++
    if (index < outputKeyList.length) {
      await build(outputKeyList[index])
    }
  }
}

runBuild()
