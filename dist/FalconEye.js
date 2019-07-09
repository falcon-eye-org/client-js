(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./event/EventListener", "./ConfigProfile"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventListener_1 = require("./event/EventListener");
    var ConfigProfile_1 = require("./ConfigProfile");
    var FalconEye = /** @class */ (function () {
        function FalconEye(apiKey) {
            this.apiKey = apiKey;
            this.hasStarted = false;
            this.eventListener = new EventListener_1.EventListener(this);
            this.config = new ConfigProfile_1.ConfigProfile();
        }
        FalconEye.prototype.observe = function () {
            if (this.hasStarted)
                return;
            if (this.config.getApiKey() != this.apiKey) { // If these api key are different, then the profile id is different
                this.config.setApiKey(this.apiKey);
                this.config.setProfileId("");
            }
            this.eventListener.listen();
            this.hasStarted = true;
        };
        FalconEye.prototype.getAPIKey = function () {
            return this.apiKey;
        };
        return FalconEye;
    }());
    exports.FalconEye = FalconEye;
    var fe = new FalconEye("adkfdsnfsnfdjnfdsjfsfssfd");
    fe.observe();
});
