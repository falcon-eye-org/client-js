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
        define(["require", "exports", "./Event"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Event_1 = require("./Event");
    var ButtonType;
    (function (ButtonType) {
        ButtonType[ButtonType["LEFT"] = 0] = "LEFT";
        ButtonType[ButtonType["MIDDLE"] = 1] = "MIDDLE";
        ButtonType[ButtonType["RIGHT"] = 2] = "RIGHT";
    })(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
    var ButtonEvent = /** @class */ (function (_super) {
        __extends(ButtonEvent, _super);
        // var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        function ButtonEvent(screenX, screenY, x, y, buttonType) {
            var _this = 
            // super(screen.width, screen.height, window.innerWidth, window.innerHeight);
            _super.call(this) || this;
            _this.screenX = screenX;
            _this.screenY = screenY;
            _this.x = x;
            _this.y = y;
            _this.buttonType = buttonType;
            return _this;
        }
        ButtonEvent.prototype.getScreenX = function () {
            return this.screenX;
        };
        ButtonEvent.prototype.getScreenY = function () {
            return this.screenY;
        };
        ButtonEvent.prototype.getX = function () {
            return this.x;
        };
        ButtonEvent.prototype.getY = function () {
            return this.y;
        };
        ButtonEvent.prototype.getButtonType = function () {
            return this.buttonType;
        };
        return ButtonEvent;
    }(Event_1.Event));
    exports.ButtonEvent = ButtonEvent;
});
