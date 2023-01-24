var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Header: () => Header
});
module.exports = __toCommonJS(src_exports);

// src/Header.tsx
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var styles = import_react_native.StyleSheet.create({
  header: {
    paddingTop: 50,
    backgroundColor: "blue"
  },
  headerText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 10
  }
});
var Header = ({
  backgroundColor = "red"
}) => {
  return /* @__PURE__ */ import_react.default.createElement(import_react_native.View, { style: [styles.header, { backgroundColor }] }, /* @__PURE__ */ import_react.default.createElement(import_react_native.Text, { style: styles.headerText }, "I am the third component"), /* @__PURE__ */ import_react.default.createElement(import_react_native.ActivityIndicator, null));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Header
});
//# sourceMappingURL=index.js.map