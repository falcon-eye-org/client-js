(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./EventListener"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventListener_1 = require("./EventListener");
    var FalconEye = /** @class */ (function () {
        function FalconEye(apiKey) {
            this.apiKey = apiKey;
            this.hasStarted = false;
            this.eventListener = new EventListener_1.EventListener(this);
        }
        FalconEye.prototype.observe = function () {
            if (this.hasStarted)
                return;
            this.eventListener.listen();
            this.hasStarted = true;
        };
        FalconEye.prototype.getAPIKey = function () {
            return this.apiKey;
        };
        return FalconEye;
    }());
    exports.FalconEye = FalconEye;
    var fe = new FalconEye("api key");
    fe.observe();
});
