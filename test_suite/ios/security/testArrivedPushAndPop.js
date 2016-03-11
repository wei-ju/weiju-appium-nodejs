"use strict";

var wd = require("wd");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

var desired = {
        "appium-version": "1.0",
        platformName: "iOS",
        platformVersion: "9.2.1",
        deviceName: "iPhone 6",
        udid: "7a19e4740f1c24b14e52d51bd6d0c114427311a7",
        app: "/Users/Diana/Library/Developer/Xcode/DerivedData/weiju-ios-gsmpxjcfvyjykybmhwwxquvgxkfh/Build/Products/Release-iphoneos/weiju-ios.app",
};

var browser = wd.promiseChainRemote("127.0.0.1", 4800);

browser.init(desired).then(function() {
        return browser
            .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIATableView[2]/UIATableCell[2]").click()
            .elementByName("icon navigationbar back").click()
            .fin(function() {
                            return browser.quit();
                                    });
}).done();

