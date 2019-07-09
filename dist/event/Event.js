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
    var Event = /** @class */ (function () {
        function Event( /*maxScreenX: number, maxScreenY: number, maxX: number, maxY: number*/) {
            this.maxScreenX = screen.width;
            this.maxScreenY = screen.height;
            this.maxX = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            this.maxY = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        }
        Event.prototype.getMaxScreenX = function () {
            return this.maxScreenX;
        };
        Event.prototype.getMaxScreenY = function () {
            return this.maxScreenY;
        };
        Event.prototype.getMaxX = function () {
            return this.maxX;
        };
        Event.prototype.getMaxY = function () {
            return this.maxY;
        };
        return Event;
    }());
    exports.Event = Event;
});
