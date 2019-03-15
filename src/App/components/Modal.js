import React from "react";
import ReactDOM from "react-dom";
import { Text, View, StyleSheet } from 'react-native'

const JSX_MODAL = (props) => (
    <View style={[styles.overlayDefaultstylesForCentring, props.overlayStyle, styles.overlayDefaultStyle]} onClick={(e) => {
        e.stopPropagation();
        props.onPressOverLay()
    }}
    >
        <View style={[props.containerStyle]}
            onClick={(e) => {
                e.stopPropagation();
                props.onPressContainer()
            }}
        >
            {props.children}
        </View>
    </View>
);

function Modal(props) {
    const MODAL = JSX_MODAL(props);
    return ReactDOM.createPortal(MODAL, document.querySelector("#modal"));
}

export default Modal;

const styles = StyleSheet.create({
    overlayDefaultstylesForCentring: {
        background: 'rgba(207, 0, 15, .5)',
    },
    overlayDefaultStyle: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});

