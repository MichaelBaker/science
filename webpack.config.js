var path = require('path');

module.exports = {
    resolve: {
        root: [__dirname + '/src']
    },

    entry: {
        javascript: path.resolve(__dirname, 'src/application.es6')
    },

    output: {
        path:     path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test:    /\.es6$/,
                exclude: /node_modules/,
                loader:  'babel',
                query:   { presets: ['es2015'] }
            }
        ]
    }
};
