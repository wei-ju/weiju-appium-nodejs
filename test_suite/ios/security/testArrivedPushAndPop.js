"use strict";

var app = require("../../../app");

var wd = require("wd");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");


var desired = app.desired;
var serverConfig = app.serverConfig;

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;


var browser = wd.promiseChainRemote(serverConfig);

browser.init(desired).then(function() {
    app.configure(browser);
        //require("./helpers/logging").configure(driver);
        //require("../../../support_files/appium-logging").configure(browser);
        return browser
            .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIATableView[2]/UIATableCell[2]").click()
            .elementByName("icon navigationbar back").click()
            .fin(function() {
                            return browser.quit();
                                    });
}).done();

