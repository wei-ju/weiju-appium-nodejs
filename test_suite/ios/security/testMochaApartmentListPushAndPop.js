"use strict";

var app = require("../../../app");

var wd = require("wd");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var _ = require('underscore');


var desired = app.desired;
var serverConfig = app.serverConfig;

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;


var browser = wd.promiseChainRemote(serverConfig);

function _Fn(val) { 
    
    describe("apartment list test", function() {
        
      this.timeout(300000);
    
      before(function () {
        app.configure(browser);
        return browser.init(desired);
      });
    
      after(function () {
        return browser
          .quit()
          .finally(function () {
          });
      });
     
      
      it("unit test", function () {
        return browser.elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIANavigationBar[1]/UIAButton[1]").click()
            .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAButton[1]").click()
            .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIATableView[2]/UIATableCell[3]/UIAButton[1]").click()
            .elementByName("icon navigationbar back").click()
            .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIATableView[2]/UIATableCell[3]/UIAButton[1]").click()
            .elementByName("icon navigationbar back").click()
      });
    
      for(var i = 1; i<=val; i++){      
        _Fn_sub();
      }

    });

}

function _Fn_sub() {
    
      it("unit test", function () {
        return browser
            .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIATableView[2]/UIATableCell[3]/UIAButton[1]").click()
            .elementByName("icon navigationbar back").click()
      });
}


_Fn(3);




