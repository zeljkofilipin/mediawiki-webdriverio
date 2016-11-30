# MediaWiki + WebdriverIO

An example repository on how to implement Selenium tests in Node.js using WebdriverIO.

## Prerequisites

- [Chrome](https://www.google.com/chrome/)
- [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/)
- [Node.js](https://nodejs.org/en/)
- [MediaWiki-Vagrant](https://www.mediawiki.org/wiki/MediaWiki-Vagrant) (optional)

## Installation

    npm install

## Usage

Run the commands in separate console tabs or windows:

    chromedriver --url-base=/wd/hub --port=4444
    ./node_modules/.bin/wdio wdio.conf.js

## Output

    $ chromedriver --url-base=/wd/hub --port=4444
    Starting ChromeDriver 2.25.426935 (820a95b0b81d33e42712f9198c215f703412e1a1) on port 4444
    Only local connections are allowed.

    $ ./node_modules/.bin/wdio wdio.conf.js
    
    =======================================================================================
    Selenium 2.0 / webdriver protocol bindings implementation with helper commands in nodejs.
    For a complete list of commands, visit http://webdriver.io/api.html.
    =======================================================================================
    
    [18:30:41]  COMMAND	POST 	 "/wd/hub/session"
    [18:30:41]  DATA		{"desiredCapabilities":{"javascriptEnabled":true,"locationContextEnabled":true,"handlesAlerts":true,"rotatable":true,"maxInstances":5,"browserName":"chrome","loggingPrefs":{"browser":"ALL","driver":"ALL"},"requestOrigins":{"url":"http://webdriver.io","version":"4.4.0","name":"webdriverio"}}}
    [18:30:42]  INFO	SET SESSION ID 539bec531cb94ce266fe79e269d0db8c
    [18:30:42]  RESULT		{"acceptSslCerts":true,"applicationCacheEnabled":false,"browserConnectionEnabled":false,"browserName":"chrome","chrome":{"chromedriverVersion":"2.25.426935 (820a95b0b81d33e42712f9198c215f703412e1a1)","userDataDir":"/var/folders/1r/x7zj18rd5d5cnw7vmr7g0mjc0000gn/T/.org.chromium.Chromium.Jkl0Qc"},"cssSelectorsEnabled":true,"databaseEnabled":false,"handlesAlerts":true,"hasTouchScreen":false,"javascriptEnabled":true,"locationContextEnabled":true,"mobileEmulationEnabled":false,"nativeEvents":true,"networkConnectionEnabled":false,"pageLoadStrategy":"normal","platform":"Mac OS X","rotatable":false,"takesHeapSnapshot":true,"takesScreenshot":true,"version":"54.0.2840.98","webStorageEnabled":true}
    [18:30:43]  COMMAND	POST 	 "/wd/hub/session/539bec531cb94ce266fe79e269d0db8c/url"
    [18:30:43]  DATA		{"url":"http://webdriver.io"}
    [18:30:46]  RESULT		null
    [18:30:46]  COMMAND	GET 	 "/wd/hub/session/539bec531cb94ce266fe79e269d0db8c/title"
    [18:30:46]  DATA		{}
    [18:30:46]  RESULT		"WebdriverIO - Selenium 2.0 javascript bindings for nodejs"
    ․[18:30:46]  COMMAND	DELETE 	 "/wd/hub/session/539bec531cb94ce266fe79e269d0db8c"
    [18:30:46]  DATA		{}
    [18:30:46]  RESULT		null
    
    1 passing (7.10s)

## Links

- [Selenium/Node.js](https://www.mediawiki.org/wiki/Selenium/Node.js)

TODO: Travis CI
