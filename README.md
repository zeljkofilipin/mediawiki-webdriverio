# Selenium + MediaWiki + Mocha + WebdriverIO

An example repository on how to implement Selenium tests in Node.js using Mocha and WebdriverIO.

## Prerequisites

- [Chrome](https://www.google.com/chrome/)
- [Node.js](https://nodejs.org/en/)
- [MediaWiki-Vagrant](https://www.mediawiki.org/wiki/MediaWiki-Vagrant)

## Installation

    npm install

## Usage

    ./node_modules/.bin/wdio wdio.conf.js

## Output

    $ which chromedriver
    /usr/local/bin/chromedriver

    $ chromedriver -v
    ChromeDriver 2.25.426935 (820a95b0b81d33e42712f9198c215f703412e1a1)

    $ ./node_modules/.bin/wdio wdio.conf.js
    
    =======================================================================================
    Selenium 2.0 / webdriver protocol bindings implementation with helper commands in nodejs.
    For a complete list of commands, visit http://webdriver.io/api.html.
    =======================================================================================
    
    [13:27:18]  COMMAND	POST 	 "/wd/hub/session"
    [13:27:18]  DATA		{"desiredCapabilities":{"javascriptEnabled":true,"locationContextEnabled":true,"handlesAlerts":true,"rotatable":true,"maxInstances":5,"browserName":"chrome","loggingPrefs":{"browser":"ALL","driver":"ALL"},"requestOrigins":{"url":"http://webdriver.io","version":"4.4.0","name":"webdriverio"}}}
    ERROR: Couldn't connect to selenium server
    chrome
    Error

## Links

- [Selenium/Node.js](https://www.mediawiki.org/wiki/Selenium/Node.js)

TODO: Travis CI
