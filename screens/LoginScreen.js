import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TextInput, StyleSheet, Button, Image, StatusBar, ActivityIndicator, } from 'react-native';
import HTMLView from 'react-native-htmlview';



import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import TextConstants from '../constants/textConstants';
import serverResponse from '../server.json';
import colors from '../constants/colors';
import * as bannerActions from '../store/actions/bannerAction';

const LoginScreen = props => {

    const [isLoading, setIsLoading] = useState(false);
    const bannerData = useSelector(state => state.bannerData.data);

    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(true);
        dispatch(bannerActions.fetchBannerData()).then(() => {
            setIsLoading(false);
        });
        return () => {
            setIsLoading();
        };
    }, [dispatch]);

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={colors.commonColors.appPrimaryColor} />
            </View>
        );
    }

    const loginHandler = () => {
        props.navigation.navigate('Home Screen');
    };
    const InfoButtonClickHandler = () => {
        props.navigation.navigate('DtaInfoScreen');
    };

    return (
        <View style={styles.screen}>
            <StatusBar />
            <View style={styles.bannerContainer}>
                <HTMLView
                    value={bannerData}
                    stylesheet={styles}
                />
            </View>
            <View style={styles.loginScreen}>
                <Image source={require('../images/dta_logo.png')} style={styles.image} />
                <Text style={styles.text}>{TextConstants.loginPageText}</Text>
                <CustomInput textAlign='center' placeholder='SOCIAL SECURITY #' onChangeText={() => { }} value={''} keyboardType='decimal-pad' />
                <CustomInput textAlign='center' placeholder='YEAR OF BIRTH (YYYY)' onChangeText={() => { }} value={''} keyboardType='decimal-pad' />
                <CustomButton style={styles.button} title='Login' onPress={loginHandler} />
                <CustomButton title='DTA Information' onPress={InfoButtonClickHandler} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    loginScreen: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 30
    },
    bannerContainer: {
        backgroundColor: '#f5c536',
        width: '100%',
        padding: 8
    },
    image: {
        marginBottom: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 10,

    },
    button: {
        marginTop: 20,
        marginBottom: 5
    },
    a: {
        fontWeight: '300',
        color: '#FF3366', // make links coloured pink
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoginScreen;