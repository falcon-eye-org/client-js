var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./FalconButtonEvent"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FalconButtonEvent_1 = require("./FalconButtonEvent");
    var FalconWheelEvent = /** @class */ (function (_super) {
        __extends(FalconWheelEvent, _super);
        function FalconWheelEvent(screenX, screenY, x, y, buttonType, deltaMode, deltaX, deltaY, deltaZ) {
            var _this = _super.call(this, screenX, screenY, x, y, buttonType) || this;
            _this.deltaMode = deltaMode;
            _this.deltaX = deltaX;
            _this.deltaY = deltaY;
            _this.deltaZ = deltaZ;
            return _this;
        }
        FalconWheelEvent.prototype.getDeltaMode = function () {
            return this.deltaMode;
        };
        FalconWheelEvent.prototype.getDeltaX = function () {
            return this.deltaX;
        };
        FalconWheelEvent.prototype.getDeltaY = function () {
            return this.deltaY;
        };
        FalconWheelEvent.prototype.getDeltaZ = function () {
            return this.deltaZ;
        };
        return FalconWheelEvent;
    }(FalconButtonEvent_1.FalconButtonEvent));
    exports.FalconWheelEvent = FalconWheelEvent;
});
