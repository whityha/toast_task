const CracoAlias = require('craco-alias');

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                options: {
                    baseUrl: './src',
                    source: 'aliasconfig',
                },
            },
        },
    ],
};
