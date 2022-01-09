import allureReporter from '@wdio/allure-reporter'
export const config: WebdriverIO.Config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/features/*.feature'
    ],
    exclude: [
        'allure-report/',
        'node_modules/',
        '.history/'
    ],
    //
    // ============
    // Capabilities
    // ============
    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        /*'goog:chromeOptions': { 
            args: ["--headless", "user-agent=...","--disable-gpu"]
        }*/
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'debug',
   
    bail: 0,

    baseUrl: 'http://www.ctqatest.biz/ecom/',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['chromedriver'],
    
    framework: 'cucumber',
    
    reporters: [
        'spec', 
        ['allure', {
        outputDir: './Reports/allure-results/',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: true,
        }]
    ],


    cucumberOpts: {
        require: [
            './test/stepDefinitions/*.ts'
        ],
        backtrace: false,
        requireModule: ['@babel/register'],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        ignoreUndefinedDefinitions: false
    },
    
    //
    // =====
    // Hooks
    // =====

    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
     before: function (capabilities, specs) {
        browser.maximizeWindow();
    },
    /**
     *
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step             step data
     * @param {IPickle}            scenario         scenario pickle
     * @param {Object}             result           results object containing scenario results
     * @param {boolean}            result.passed    true if scenario has passed
     * @param {string}             result.error     error stack if scenario failed
     * @param {number}             result.duration  duration of scenario in milliseconds
     * @param {Object}             context          Cucumber World object
     */
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (error) {
            browser.takeScreenshot();
        }
    }
      
}
