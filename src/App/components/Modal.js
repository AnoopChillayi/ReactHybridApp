import React from "react";
import ReactDOM from "react-dom";
import { Text, View, StyleSheet } from 'react-native'

const JSX_MODAL = (props) => (
    <View style={[styles.overlayDefaultstylesForCentring, props.overlayStyle, styles.overlayDefaultStyle]} onClick={(e) => {
        e.stopPropagation();
        props.onPressOverLay()
    }}
    >

        <View style={[props.containerStyle,styles.containerDeafultStyle]} onClick={ (e)=>{ e.stopPropagation()}}>
            {props.children}
            <View
                style={styles.closeButtonStyle}
                onClick={(e) => {
                    e.stopPropagation();
                    props.onPressContainer()
                }}
            >
                <Text>{"*"}</Text>
            </View>
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
    },
    containerDeafultStyle:{
      //  alignSelf: 'baseline',
        zIndex:1,
    },
    closeButtonStyle: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        position: 'absolute',
        borderRadius: 20,
        top: -20,
        right: -20,
        textAlign: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
    }

});

