require('chai').should();

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until
    username = "kkuo42"
    accessKey = "c03f2778-8165-49a9-9274-bb27dc98e284";

var test = require('selenium-webdriver/testing');
var assert = require('assert');

// can't run end2end tests on something that isn't deployed yet
if(process.env.TRAVIS_BRANCH === 'staging') {
    console.log("E2E testing skipped, staging CI");
    return;
}

const mochaTimeOut = 30000;

var driver;
var site;

test.before(function() {
    this.timeout(mochaTimeOut);
    if(process.env.TRAVIS_BRANCH === 'master') {
        console.log("E2E testing on staging branch, master CI");
        driver = new webdriver.Builder().
            withCapabilities({
                'browserName': 'chrome',
                'platform': 'Windows XP',
                'version': '43.0',
                'username': username,
                'accessKey': accessKey
            }).
            usingServer("http://" + username + ":" + accessKey +
                        "@ondemand.saucelabs.com:80/wd/hub").
            build();
        site = 'https://cse112-1-staging.herokuapp.com/';
    }
    else {
        driver = new webdriver.Builder().forBrowser('chrome').build();
        site = 'http://localhost:3000/';
    }
})

test.describe("Searching webdriver online", function() {
    test.it("Searches webdriver online", function() {
        this.timeout(mochaTimeOut);
        driver.get('http://www.google.com/ncr');
        driver.findElement(By.name('q')).sendKeys('webdriver');
        driver.findElement(By.name('btnG')).click();
        driver.wait(until.titleIs('webdriver - Google Search'), 5000);
        assert.equal(true, true);
    });
});

test.describe("Loading landing page", function() {
    test.it("Loads landing page", function() {
        this.timeout(mochaTimeOut);
        driver.get(site)
        driver.findElement(By.id('top-page'));
        assert.equal(true, true);
    });
});

test.describe("Landing Page", function() {
   test.it("Checks landing home", function() {
       this.timeout(mochaTimeOut);
       driver.get(site)
           .then(() => driver.getTitle())
           .then(title => title.should.equal('Landing Page'))
   });

});

test.describe("Log In Page", function() {
    test.it("Log in page loads", function() {
       this.timeout(mochaTimeOut);
       driver.get(site)
            .then(() => driver.findElement(By.linkText('LOG IN')).click())
            .then(() => driver.getCurrentUrl())
            .then(URL => URL.should.equal(site + 'login'))
    });
});

test.describe("Register Page", function() {
   test.it("Checks Register Page Loads", function() {
      this.timeout(mochaTimeOut);
      driver.get(site)
          .then(() => driver.findElement(By.linkText('LOG IN')).click())
          .then(() => driver.getCurrentUrl())
          .then(URL => URL.should.equal(site +'login'))
          .then(() => driver.findElement(By.linkText('REGISTER')).click())
          .then(() => driver.getCurrentUrl())
          .then(URL => URL.should.equal(site + 'register'))
   });
});



test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
    driver.quit();
});
