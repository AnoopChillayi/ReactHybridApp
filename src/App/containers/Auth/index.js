import React, { Component } from 'react';
import {View,StyleSheet,Text,TextInput} from 'react-native';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Colors from '../../themes/Colors';
import FormControls from '../../components/FormControls';

class Auth extends Component {
    state = {
        controls: {
            username: {
                elementType: 'TextInput',
                elementConfig: {
                    placeholder:'Username',
                    placeholderTextColor:Colors.grey_600,
                    secureTextEntry:false,
                    editable:true,
                    numberOfLines:1,
                    multiline:false,
                    accessible:true,
                    accessibilityLabel:'username'
                },
                value: '',
                label:'Username',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'TextInput',
                elementConfig: {
                    placeholder:'Username',
                    placeholderTextColor:Colors.grey_600,
                    secureTextEntry:true,
                    editable:true,
                    numberOfLines:1,
                    multiline:false,
                    accessible:true,
                    accessibilityLabel:'password'
                },
                label:'Password',
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true,
    }

    componentDidMount () {
        //   this.props.onTryAutoSignup();
         }
    
    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;
    }

    inputChangedHandler = ( event, controlName ) => {
        console.log(event);
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );
    }
  render () {
    const formElementsArray = [];
    for ( let key in this.state.controls ) {
        formElementsArray.push( {
            id: key,
            config: this.state.controls[key]
        } );
    }

    let form = formElementsArray.map( formElement => (
        <FormControls
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            controlStyle={styles.textInput}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            label={formElement.config.label}
            changed={( event) => this.inputChangedHandler( event, formElement.id )} />
    ) );

    return (

<View style={styles.container}>

{form}

  </View>

  
   
    );

  }
}
export default Auth;

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderRadius:16,
        padding:25

    },
 label:{
        color: '#444444',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24,
        paddingBottom: 5
 },
 textInput: {
    color: 'rgb(0,153,137)',
    width:350,
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: "500",
    letterSpacing: 0.4,
    lineHeight: 30,
    flex: 1,
    padding:10,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:20,
    outline:'0'

},
})

