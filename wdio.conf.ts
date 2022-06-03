exports.config = {
    runner: 'local',
    specs: [
        [
            './tests/login-page.spec.ts',
            './tests/home-page.spec.ts',
            './tests/stores/lenovo-store.spec.ts',
            './tests/categories/**.spec.ts'
        ],
    ],
    maxInstances: 2,
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.perksatwork.com/',
    waitforTimeout: 60000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    // services: ['chromedriver'],
    services: [
       [{ drivers: { chrome: '101.0.4951.64' } }]
    ],
    framework: 'mocha',
    specFileRetries: 2,
    specFileRetriesDelay: 0,
    specFileRetriesDeferred: false,
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        },
        tsConfigPathsOpts: {
            baseUrl: './'
        }
    },
    beforeSuite: async () =>  {
        await browser.maximizeWindow();
    },

};
