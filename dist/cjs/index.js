"use strict";
function e(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var t = e(require("react"));
(exports.Button = function (e) {
  return t.default.createElement("button", { className: "button" }, e.label);
}),
  (exports.Test = function () {
    return t.default.createElement("div", { className: "test" }, "Test");
  });
//# sourceMappingURL=index.js.map
