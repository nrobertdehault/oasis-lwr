module.exports = {
    projectDir: __dirname,
    buildDir: 'dist',
    moduleDir: 'src/modules',
    watch: false,
    app: {
        defaultTemplate: 'src/index.html',
    },
    server: {
        port: +process.env.PORT || 3001, // this isn't even respected, sigh
        basePath: '',
        contentSecurityPolicy: {
            directives: {
                scriptSrc: ['cdn.evgnet.com', 'interactionstudio.us-1.evergage.com']
            },
            loose: true,
        }
    },
    defaultMode: process.env.MODE || "dev"
};
