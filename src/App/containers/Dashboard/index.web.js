import React, { Component } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, ScrollView } from 'react-native';
// import CalendarPicker from 'react-native-calendar-picker';


class Dashboard extends Component {
    // state = {
    //     selectedStartDate: null,
    // };
    // onDateChange(date) {
    //     this.setState({
    //         selectedStartDate: date,
    //     });
    // }

    render() {
        // const { selectedStartDate, selectedEndDate } = this.state;
        // const minDate = new Date(); // Today
        // const maxDate = new Date(2017, 6, 3);
        // const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
        // const endDate = selectedEndDate ? selectedEndDate.toString() : '';
        return (
            // <View style={{ backgroundColor: 'gray', flex: 1, margin: 30, borderRadius: 16, padding: 20, }}>
            <View style={{ backgroundColor: 'gray', flex: 1, }}>

                <View style={{ height: 40, backgroundColor: "orange" }}>


                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>


                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        {/* <ActivityIndicator size="large" color="#0000ff" /> */}

                        <View style={styles.container}>
                            {/* <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange}
        /> */}


                            {/* 
                            <Text>SELECTED DATE:{startDate}</Text> */}
                        </View>

                    </View>


                </ScrollView>




            </View>
        )
    }
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 100,
    },
});