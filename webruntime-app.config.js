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
                scriptSrc: [
                    'cdn.pendo.io', 
                    'data.pendo.io', 
                    'app.pendo.io', 
                    'www.googletagmanager.com', 
                    `'sha256-DYeo5qJWmrIYG0P85Q0alzt+Hp31aNAQdGfIGkVC1PE='`,
                    `'sha256-SkFuD2DKggQNLr3DLwAyKkIG8j3lKQA5LHOOd/l/XUQ='`,
                    `'sha256-a7tRDcNFroc5GyK3fKcaTHtiwQJ6G0SRaidkh6Pzlp8='`, 
                    `'sha256-Y/YmipWDug0DNIzJsB+uTdkIleBMF1A5d9QQfxY4i9M='`
                ]
            },
            loose: true,
        }
    },
    defaultMode: process.env.MODE || "dev"
};
