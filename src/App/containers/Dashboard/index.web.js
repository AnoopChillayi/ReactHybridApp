import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, ScrollView, Image } from 'react-native';
import images from '../../themes/images';
import Modal from '../../components/Modal';
class Dashboard extends Component {

    state = {
        showModal: false
    }

    drawChain(lineColor, ) {

        const Items = [];
        for (let i = 0; i < 7; i++) {
            Items.push(
                <View style={{ flex: 1, width: 50, height: 5, backgroundColor: '#007bd1' }}>

                    <View style={{ borderWidth: 1.5, height: 15, width: 15, backgroundColor: 'white', borderColor: '#007bd1', borderRadius: 15, position: 'absolute', top: -5, }} ></View>
                </View>
            )
        }
        Items.push(
            <View style={{ flex: 1, width: 50, height: 5, backgroundColor: '#007bd1' }}>

                <View style={{ borderWidth: 1.5, height: 15, width: 15, backgroundColor: 'white', borderColor: '#007bd1', borderRadius: 15, position: 'absolute', top: -5, }} ></View>
                <View style={{ borderWidth: 1.5, alignSelf: 'flex-end', height: 15, width: 15, backgroundColor: 'white', borderColor: '#007bd1', borderRadius: 15, position: 'absolute', top: -5, }} ></View>
            </View>
        )


        return (
            <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                {Items}
            </View>
        )
    }

    onGetInTouchPress = () => {
        this.setState({
            showModal: true
        })
    }
    onPressOverLay=()=>{
        this.setState({
            showModal: false
        })
    }
    onPressContainer=()=>{
        alert("on conatiner click")
    }


    renderModal() {
        return (
            <Modal

                onPressOverLay={this.onPressOverLay}
                onPressContainer={this.onPressContainer}
                containerStyle={{ backgroundColor:'blue', padding:10,alignSelf:'baseline',margin:'auto'}}
                overlayStyle={{   backgroundColor: 'rgba(0, 0, 0, 0.7)'}}
            >

                <View style={{   padding: 15,backgroundColor:'white'}}>
                    <Image resizeMode="contain" style={{ width: 300, height: 300,backgroundColor:'green' }} source={images.btcoin_bg_jpg} />
                </View>


            </Modal>
        )
    }

    render() {
        return (
            // <View style={{ backgroundColor: 'gray', flex: 1, margin: 30, borderRadius: 16, padding: 20, }}>
            // background: 'linear-gradient(to right, #22c1c3, #fdbb2d)'
            <View style={{ backgroundColor: 'black', height: '100vh' }}>
                {this.state.showModal ? this.renderModal() : null}

                <View style={{ height: 90, flexDirection: 'row', }}>
                    <Image style={{ width: 90, }} source={images.btcoin_logo} />
                    <View style={{ color: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 16, fontWeight: 500, marginLeft: 15 }}>{"products".toUpperCase()}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 500, marginLeft: 15 }}>{"services".toUpperCase()}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 500, marginLeft: 15 }}>{"solutions".toUpperCase()}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 500, marginLeft: 15 }}>{"portfolio".toUpperCase()}</Text>

                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 15 }}>
                        <Button title={"Get In Touch"} onPress={this.onGetInTouchPress} />
                    </View>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flexDirection: 'row' }} >

                        <View style={{ flex: .3, alignItems: 'center', padding: 15, }}>
                            <Image resizeMode="contain" style={{ width: 400, height: 400 }} source={images.btcoin_bg_jpg} />
                        </View>
                        <View style={{ flex: .7, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 50, fontWeight: 1000, color: 'white', fontFamily: 'Montserrat, sans-serif' }} >{"Transform Your Business with Block Chain"}</Text>
                            <Text style={{ fontSize: 25, fontWeight: 300, color: 'white' }}>{"Disrupt your industry. Power your startup. Rationalize and control your business."}</Text>

                            <View style={{ height: 3, marginTop: 15, marginBottom: 15, backgroundColor: 'red' }}>

                            </View>
                            {/*                             
                            <View style={{ height: 3, margin: 15 }}>
                                {this.drawChain()}
                            </View> */}

                            <Text style={{ fontSize: 16, fontWeight: 500, color: 'white', lineHeight: 25, }} >Openledger delivers the blockchain services and custom blockchain development that powers real business transformations. Create new business tools based on revolutionary decentralized networks that change your industry forever. Build your dream on our blockchain services and consultancy. Or create your own network and run your business totally distributed and secure.</Text>
                        </View>
                    </View>

                    {/* <View style={{ flexDirection: 'row', background: 'linear-gradient(to right, #22c1c3, #fdbb2d)' }} >
                    <Image resizeMode="contain" style={{ width: 400, height: 400 }} source={images.btcoin_bg_jpg} />
                        
                    </View> */}




                    {this.drawChain()}

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