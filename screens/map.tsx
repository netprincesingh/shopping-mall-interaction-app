import React from 'react';
import { ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity, 
    View,
    SafeAreaView,
    Image,
    } from 'react-native';


    const map = ({navigation}) => {
        return(
        <View style={styles.containerMain}> 
        <SafeAreaView style = {styles.safeArea}>
        <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
                <Text style = {styles.headText}>
                    Bluetooth Beacons
                </Text>

                <Image 
                    source={require('./img/3.png')}
                    style={styles.btImage}
                />
                <Text style = {styles.paraText}>
                    Bluetooth beacon technology is responsible for innovative monitoring and tracking techniques with which companies are addressing indoor location, navigation and proximity issues. {'\n'}{'\n'}
                    
                    Bluetooth beacons are used across a wide range of industries and in particular in retail for targeted marketing and enhancing the customer experience.{'\n'}{'\n'} 
                    
                    We are going to look at the technologies behind Bluetooth beacons, their development, and how they are being used by businesses today.

                    Bluetooth beacons rely on Bluetooth technology that has become a ubiquitous technology that covers a wide range of use cases from stream audio, connecting keyboards and medical devices. Beacons only use a small part of the Bluetooth protocol, the piece responsible for device discovery. {'\n'}{'\n'}
                    
                    This is the part that allows your laptop to become aware of a printer nearby or the availability of headphones for audio streaming
                </Text>

        </ScrollView>
        </SafeAreaView>
        </View>
        );
    };


    const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        padding: 20,
    },
    safeArea: {
        flex: 1,
    },
    scrollContent: {
        alignItems: 'center',
        paddingBottom: 80,
    },
    headText: {
        fontSize: 30,
        color: 'blue',
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    btImage:{
        height:200,
        width:380,
        borderRadius:15,
       
    },
    paraText:{
        paddingTop: 30,
        fontSize: 20,
        fontFamily: 'Arial',
        fontStyle: 'italic',
    },
    });

    export default map;