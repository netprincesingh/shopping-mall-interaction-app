import React from 'react';
import { SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity, View } from 'react-native';

    const map = ({navigation}) => {
        return(
        <View> 
            <SafeAreaView>
                <Text style = {styles.textStyle}>
                    Hello Map!
                </Text>
            </SafeAreaView>
        </View>
        );
    };


    const styles = StyleSheet.create({
        textStyle: {
            fontSize: 15,
            color: 'black'
        }
    });

    export default map;