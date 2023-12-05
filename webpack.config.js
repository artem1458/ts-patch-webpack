module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts', '.mjs'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
        ],
    }
};
