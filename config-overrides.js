const {
    override,
    fixBabelImports,
    addBabelPlugins,
    adjustStyleLoaders,
    addWebpackPlugin
  } = require('customize-cra');
  const path = require('path');
  const loaderUtils = require("loader-utils");
  
  module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    adjustStyleLoaders(({ use: [ _, css, postcss, resolve, processor ] }) => {
      
      // pre-processor
      if (processor && processor.loader.includes('sass-loader')) {
        processor.options.implementation = require('sass') // sass-loader
      }
    }),
    ...addBabelPlugins([
      'babel-plugin-react-css-modules',
      {
        exclude: 'node_modules',
        filetypes: {
          '.scss': {
            syntax: 'postcss-scss',
          },
        },
        autoResolveMultipleImports: true,
        generateScopedName: function(name, filename) {
          const fileNameOrFolder = filename.match(
            /index\.module\.(css|scss|sass)$/
          )
            ? path.basename(path.dirname(filename))
            : path.basename(filename, '.css');
          const hash = loaderUtils.getHashDigest(
            path.posix.relative(process.cwd(), filename) + name,
            'md5',
            'base64',
            5
          );
          return (
            fileNameOrFolder.replace('.module', '') + '_' + name + '__' + hash
          );
        },
      },
    ], "@babel/plugin-proposal-optional-chaining")
  );
  