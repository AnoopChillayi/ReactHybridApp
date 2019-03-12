import React, { Component } from 'react';
import { View, StyleSheet, Button, ActivityIndicator, Picker } from 'react-native';
import { Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Colors from '../../themes/Colors';
import * as actions from '../../Store/actions/index';
import FormControls from '../../components/FormControls';
import DropDown from '../../components/DropDown';


class Auth extends Component {
    state = {
        controls: {
            // username: {
            //     elementType: 'TextInput',
            //     elementConfig: {
            //         placeholder: 'Username',
            //         placeholderTextColor: Colors.grey_600,
            //         secureTextEntry: false,
            //         editable: true,
            //         numberOfLines: 1,
            //         multiline: false,
            //         accessible: true,
            //         accessibilityLabel: 'username'
            //     },
            //     value: '',
            //     label: 'Username',
            //     validation: {
            //         required: true,
            //     },
            //     valid: false,
            //     touched: false
            // },
            email: {
                elementType: 'TextInput',
                elementConfig: {
                    placeholder: 'Email',
                    placeholderTextColor: Colors.grey_600,
                    secureTextEntry: false,
                    editable: true,
                    numberOfLines: 1,
                    multiline: false,
                    accessible: true,
                    accessibilityLabel: 'Email'
                },
                label: 'Email',
                value: '',
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
                    placeholder: 'Username',
                    placeholderTextColor: Colors.grey_600,
                    secureTextEntry: true,
                    editable: true,
                    numberOfLines: 1,
                    multiline: false,
                    accessible: true,
                    accessibilityLabel: 'password'
                },
                label: 'Password',
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            },

            // mobile: {
            //     elementType: 'TextInput',
            //     elementConfig: {
            //         placeholder: 'Mobile',
            //         placeholderTextColor: Colors.grey_600,
            //         secureTextEntry: false,
            //         editable: true,
            //         numberOfLines: 1,
            //         multiline: false,
            //         accessible: true,
            //         accessibilityLabel: 'Mobile'
            //     },
            //     label: 'Mobile',
            //     value: '',
            //     validation: {
            //         required: true,
            //         isEmail: true
            //     },
            //     valid: false,
            //     touched: false
            // }
        },
        isSignup: false,
        language:''
    }

    componentDidMount() {
        //   this.props.onTryAutoSignup();
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, controlName) => {
        console.log(event);
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({ controls: updatedControls });
    }

    submitHandler = (event) => {
        event.preventDefault();
         this.props.history.push("/dashboard")
      //  this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }
    onDropDownValueChange=(value,index)=>{
        this.setState({
            language:value
        })
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form= formElementsArray.map(formElement => (
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
                    changed={(event) => this.inputChangedHandler(event, formElement.id)} />
            ));
        if (this.props.loading) {
            form = <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        }
        const itemObj = [
            {
                label: "js",
                value: "js"
            },
            {
                label: "c++",
                value: "c++"
            },
            {
                label: "react",
                value: "react"
            }
        ]



        return (

            <View style={styles.container}>
                {form}
                <View style={{ marginTop: 15 }}>
                    <Button
                        onPress={this.submitHandler}
                        title="Submit"
                        color="gray"
                        accessibilityLabel="form submit"
                    />
                </View>

                {/* <DropDown
                    dropDownStyle={styles.dropdown}
                    selectedValue={this.state.language}
                    placeholder={"Please select value"}
                    onValueChange ={this.onDropDownValueChange}
                    itemStyle={{color:'red'}}
                    items={itemObj}>
                </DropDown> */}

            </View>
        );

    }
}
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 25,
        alignSelf: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 10,
        shadowOpacity: 0.15,

    },
    label: {
        color: '#444444',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24,
        paddingBottom: 5
    },
    textInput: {
        color: 'rgb(0,153,137)',
        width: 350,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0.4,
        lineHeight: 16,
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 22,
        outline: '0'

    },
    dropdown: {
        width: 350,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0.4,
        lineHeight: 16,
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',

    },
})

