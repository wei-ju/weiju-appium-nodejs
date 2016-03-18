"use strict";

var wd = require("wd");
var serverConfigs = require('./support_files/appium-config');

var serverConfig = serverConfigs.local;
var desired = require('./support_files/appium-devices').iOS9;
//var desired = require('./support_files/appium-devices').android17;


module.exports.desired = desired;
module.exports.serverConfig = serverConfig;
module.exports.configure = require('./support_files/appium-logging').configure;

