exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],

    capabilities: {
      'browserName': 'chrome',
    //   chromeOptions: {
    //     args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    //   },
      shardTestFiles: true,
      maxInstances: 6
      
    },
    specs: ['todo-spec.js', 'todo-spec1.js', 'todo-spec2.js','todo-spec3.js','todo-spec4.js',
    'todo-spec5.js','todo-spec6.js'],
    // multiCapabilities: [{
    //     'browserName': 'firefox'
    //   }, {
    //     'browserName': 'chrome'
    //   }]
};
