module.exports = (api) => {
    api.cache.forever();

    return {
        presets: [
            ['@babel/preset-env', { modules: false }],
            '@babel/preset-react',
        ],
        plugins: ['@babel/plugin-transform-runtime']
    };
};
