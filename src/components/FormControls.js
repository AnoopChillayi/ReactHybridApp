import React from 'react';
import {View,StyleSheet,Text,TextInput} from 'react-native';
const FormControls = ( props ) => {
    let inputElement = null;
   // const inputClasses = [classes.InputElement];

    // if (props.invalid && props.shouldValidate && props.touched) {
    //     inputClasses.push(classes.Invalid);
    // }

    switch ( props.elementType ) {
        case ( 'TextInput' ):

        inputElement=<TextInput
             {...props.elementConfig}
             style={props.controlStyle}
             value={props.value}
             onChange={props.changed}
         />
            break;
        // case ( 'textarea' ):
        //     inputElement = <textarea
        //         className={inputClasses.join(' ')}
        //         {...props.elementConfig}
        //         value={props.value}
        //         onChange={props.changed} />;
        //     break;
        // case ( 'select' ):
        //     inputElement = (
        //         <select
        //             className={inputClasses.join(' ')}
        //             value={props.value}
        //             onChange={props.changed}>
        //             {props.elementConfig.options.map(option => (
        //                 <option key={option.value} value={option.value}>
        //                     {option.displayValue}
        //                 </option>
        //             ))}
        //         </select>
        //     );
        //     break;
        default:
        inputElement=<TextInput
                {...props.elementConfig}
                styles={props.controlStyle}
                value={props.value}
                onChangeText={this.onChangeText}
    />
    }

    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            {inputElement}
        </View>
    );

};

export default FormControls;

const styles=StyleSheet.create({
 label:{
        color: '#444444',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24,
        paddingBottom: 5
 }
})