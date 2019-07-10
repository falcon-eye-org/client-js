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
    var KeyStatus;
    (function (KeyStatus) {
        KeyStatus[KeyStatus["KEYDOWN"] = 0] = "KEYDOWN";
        KeyStatus[KeyStatus["KEYPRESS"] = 1] = "KEYPRESS";
        KeyStatus[KeyStatus["KEYUP"] = 2] = "KEYUP";
    })(KeyStatus = exports.KeyStatus || (exports.KeyStatus = {}));
    var FalconKeyboardEvent = /** @class */ (function (_super) {
        __extends(FalconKeyboardEvent, _super);
        function FalconKeyboardEvent(key, keycode, keystatus) {
            var _this = _super.call(this) || this;
            _this.key = key;
            _this.keycode = keycode;
            _this.keystatus = keystatus;
            return _this;
        }
        FalconKeyboardEvent.prototype.getKey = function () {
            return this.key;
        };
        FalconKeyboardEvent.prototype.getKeyCode = function () {
            return this.keycode;
        };
        FalconKeyboardEvent.prototype.getKeyStatus = function () {
            return this.keystatus;
        };
        return FalconKeyboardEvent;
    }(FalconEvent_1.FalconEvent));
    exports.FalconKeyboardEvent = FalconKeyboardEvent;
});
