import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default ({onPressLeft, textLeft, togglePointsFilter, textRight}) => {
    return (
        <View style={styles.panel}>
            <Button title={textLeft} onPress={onPressLeft}>
            </Button>
            <Button title={textRight} onPress={togglePointsFilter}>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
