var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../node_modules/persistent-typescript/build/Persistent"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Persistent_1 = require("../node_modules/persistent-typescript/build/Persistent");
    var ConfigProfile = /** @class */ (function () {
        function ConfigProfile() {
            this.apiKey = "";
            this.profileId = "";
        }
        ConfigProfile.prototype.getApiKey = function () {
            return this.apiKey;
        };
        ConfigProfile.prototype.getProfileId = function () {
            return this.profileId;
        };
        ConfigProfile.prototype.setApiKey = function (apiKey) {
            this.apiKey = apiKey;
        };
        ConfigProfile.prototype.setProfileId = function (profileId) {
            this.profileId = profileId;
        };
        ConfigProfile = __decorate([
            Persistent_1.Persistent(),
            __metadata("design:paramtypes", [])
        ], ConfigProfile);
        return ConfigProfile;
    }());
    exports.ConfigProfile = ConfigProfile;
});
