import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const CustomInput = props => {
    return (
        <View style={{ ...styles.inputContainer, ...props.style }} >
            <TextInput
                textAlign={props.textAlign}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
                keyboardType={props.keyboardType}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.commonColors.textInput_borderColor,
        marginVertical: 10,
        width: '90%'
    }
});

export default CustomInput;