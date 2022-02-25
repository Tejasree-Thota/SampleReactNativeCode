import React from 'react';
import { View, Button, StyleSheet, Platform } from 'react-native';
import colors from '../constants/colors';

const CustomButton = props => {
    return (
        <View style={{ ...styles.buttonContainer, ...props.style }} >
            <Button title={props.title} onPress={props.onPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: '90%',
        borderWidth: Platform.OS === 'android' ? 0 : 1,
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 5,
        color: colors.commonColors.appPrimaryColor
    }
});

export default CustomButton;