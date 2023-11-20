module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader', // or 'babel-loader'
                options: {
                    svgo: {
                        plugins: [{
                            removeNamespace: {
                                throwIfNamespace: false
                            }
                        }]
                    }
                }
            }
        ]
    }
};