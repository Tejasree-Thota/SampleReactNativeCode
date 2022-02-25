import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TabScreen1 = props => {
    return (
        <View style={styles.screen}>
            <Text>This is Notifications Screen!</Text>
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

export default TabScreen1;

