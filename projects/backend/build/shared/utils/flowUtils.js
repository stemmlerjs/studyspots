"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowUtils = void 0;
var FlowUtils = /** @class */ (function () {
    function FlowUtils() {
    }
    FlowUtils.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    return FlowUtils;
}());
exports.FlowUtils = FlowUtils;
