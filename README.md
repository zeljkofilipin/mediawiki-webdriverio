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

## Links

- [Selenium/Node.js](https://www.mediawiki.org/wiki/Selenium/Node.js)

[![Build Status](https://travis-ci.org/zeljkofilipin/mediawiki-webdriverio.svg?branch=master)](https://travis-ci.org/zeljkofilipin/mediawiki-webdriverio)
