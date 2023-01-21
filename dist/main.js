var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $8zHUo$reactnative = require("react-native");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Header", () => $35a8e0ac890e962c$export$8b251419efc915eb);



const $35a8e0ac890e962c$var$styles = (0, $8zHUo$reactnative.StyleSheet).create({
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
const $35a8e0ac890e962c$export$8b251419efc915eb = ({ backgroundColor: backgroundColor = "purple"  })=>{
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $8zHUo$reactnative.View), {
        style: [
            $35a8e0ac890e962c$var$styles.header,
            {
                backgroundColor: backgroundColor
            }
        ],
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $8zHUo$reactnative.Text), {
            style: $35a8e0ac890e962c$var$styles.headerText,
            children: "I am the first component"
        })
    });
};




//# sourceMappingURL=main.js.map
