import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TabScreen3 = props => {
    return (
        <View style={styles.screen}>
            <Text>This is Tab Screen 3!</Text>
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

export default TabScreen3;

