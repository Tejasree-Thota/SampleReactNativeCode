import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TabScreen4 = props => {
    return (
        <View style={styles.screen}>
            <Text>This is Tab Screen 4!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TabScreen4;

