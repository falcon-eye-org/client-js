(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FalconEvent = /** @class */ (function () {
        function FalconEvent() {
            this.maxScreenX = screen.width;
            this.maxScreenY = screen.height;
            this.maxX = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            this.maxY = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.currentPath = window.location.pathname;
            this.date = new Date();
        }
        FalconEvent.prototype.getMaxScreenX = function () {
            return this.maxScreenX;
        };
        FalconEvent.prototype.getMaxScreenY = function () {
            return this.maxScreenY;
        };
        FalconEvent.prototype.getMaxX = function () {
            return this.maxX;
        };
        FalconEvent.prototype.getMaxY = function () {
            return this.maxY;
        };
        FalconEvent.prototype.getCurrentPath = function () {
            return this.currentPath;
        };
        FalconEvent.prototype.getDate = function () {
            return this.date;
        };
        return FalconEvent;
    }());
    exports.FalconEvent = FalconEvent;
});
