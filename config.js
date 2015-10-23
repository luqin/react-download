var path = require('path');

var taskConfig = {

  component: {
    name: 'react-download',
    scripts: {
      entry: './src/index.js',
      output: {
        library: 'ReactDownload'
      },
      externals: {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        }
      }
    },
    less: {
      entry: ''
    }
  },

  example: {
    src: './examples/src',
    dist: './examples/dist',
    index: 'index.html',
    script: 'js/app.js',
    alias: {
      'react-datatables': path.resolve(__dirname, './src')
    },
    files: []
  }

};

module.exports = taskConfig;
