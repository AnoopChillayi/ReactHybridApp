import React, { Component } from 'react';
import { View, StyleSheet, Text, Picker } from 'react-native';
class DropDown extends Component {
    state = {
        isShowPlaceholder: this.props.selectedValue ? false : true
    }
    myRef = React.createRef();

    getItems = (items) => {
        return items.map((item, index) => {
            return <Picker.Item key={index} label={item.label} value={item.value} />
        })
    };
    openPicker = () => {
        console.log(this.myRef)
        this.setState({
            isShowPlaceholder: false
        })
    }
    render() {
        return (
            <View>
                {
                    !this.state.isShowPlaceholder ? <Picker
                        ref={this.myRef}
                        selectedValue={this.props.selectedValue}
                        style={this.props.dropDownStyle}
                        onValueChange={(itemValue, itemIndex) =>
                            this.props.onValueChange(itemValue, itemIndex)
                        }>
                        {
                            this.getItems(this.props.items)
                        }

                    </Picker>
                        :
                        <View style={[this.props.dropDownStyle, { flexDirection: 'row' }]} onClick={this.openPicker}>
                            <Text style={styles.placeholder}>{this.props.placeholder}</Text>
                            <View style={{ alignSelf: 'flex-end', transform: 'rotate(-180deg)' }}><Text>{"^"}</Text></View>
                        </View>
                }
            </View>
        );
    }

};

export default DropDown;

const styles = StyleSheet.create({
    placeholder: {
        // color: '#444444',
        // fontFamily: 'Roboto',
        // fontSize: 16,
        alignSelf: 'flex-start',
        flex: 1
    }
})