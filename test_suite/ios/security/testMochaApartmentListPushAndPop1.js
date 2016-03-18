"use strict";

var wd = require("wd");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

var desired = {
    "appium-version": "1.0",
    platformName: "Android",
    platformVersion: "4.2",
    deviceName: "355BBJRVQQAC",
    app: "",
    "app-package": "com.evideo.weiju",
    "app-activity": ".ui.activity.WelcomActivity"
};

var browser = wd.promiseChainRemote("127.0.0.1", 4800);

browser.init(desired).then(function() {
    return browser
        .elementByXPath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.view.View[1]/android.widget.RelativeLayout[1]/android.support.v4.view.ViewPager[1]/android.widget.FrameLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[4]/android.widget.RelativeLayout[1]").click()
        .elementByXPath("//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.RelativeLayout[1]/android.widget.ImageView[1]").click()
        .fin(function() {
            return browser.quit();
        });
}).done();

