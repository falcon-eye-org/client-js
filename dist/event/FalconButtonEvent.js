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
        define(["require", "exports", "./FalconEvent"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FalconEvent_1 = require("./FalconEvent");
    var ButtonType;
    (function (ButtonType) {
        ButtonType[ButtonType["LEFT"] = 0] = "LEFT";
        ButtonType[ButtonType["MIDDLE"] = 1] = "MIDDLE";
        ButtonType[ButtonType["RIGHT"] = 2] = "RIGHT";
    })(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
    var FalconButtonEvent = /** @class */ (function (_super) {
        __extends(FalconButtonEvent, _super);
        function FalconButtonEvent(screenX, screenY, x, y, buttonType) {
            var _this = _super.call(this) || this;
            _this.screenX = screenX;
            _this.screenY = screenY;
            _this.x = x;
            _this.y = y;
            _this.buttonType = buttonType;
            return _this;
        }
        FalconButtonEvent.prototype.getScreenX = function () {
            return this.screenX;
        };
        FalconButtonEvent.prototype.getScreenY = function () {
            return this.screenY;
        };
        FalconButtonEvent.prototype.getX = function () {
            return this.x;
        };
        FalconButtonEvent.prototype.getY = function () {
            return this.y;
        };
        FalconButtonEvent.prototype.getButtonType = function () {
            return this.buttonType;
        };
        return FalconButtonEvent;
    }(FalconEvent_1.FalconEvent));
    exports.FalconButtonEvent = FalconButtonEvent;
});
