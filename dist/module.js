import {jsx as $hgUW1$jsx} from "react/jsx-runtime";
import "react";
import {StyleSheet as $hgUW1$StyleSheet, View as $hgUW1$View, Text as $hgUW1$Text} from "react-native";




const $e6b11d4ccae46153$var$styles = (0, $hgUW1$StyleSheet).create({
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
const $e6b11d4ccae46153$export$8b251419efc915eb = ({ backgroundColor: backgroundColor = "purple"  })=>{
    return /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$View), {
        style: [
            $e6b11d4ccae46153$var$styles.header,
            {
                backgroundColor: backgroundColor
            }
        ],
        children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Text), {
            style: $e6b11d4ccae46153$var$styles.headerText,
            children: "I am the first component"
        })
    });
};




export {$e6b11d4ccae46153$export$8b251419efc915eb as Header};
//# sourceMappingURL=module.js.map
