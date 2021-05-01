# protractor-parallelTesting

This project is to test the parallel testing with multilple instance of the same browser and differnt browser capability to check the speed of the execution.

Steps to Run the project

1. npm install -g protractor
2. webdriver-manager update
3. webdriver-manager start
4  protractor conf.js


To test the parallel execution from the same browser, Enable the sharedTestFile to true and instances can be enabled based on the size of the testcase
      shardTestFiles: true,
      maxInstances: 6
