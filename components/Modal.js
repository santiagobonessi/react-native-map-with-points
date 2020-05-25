import React from 'react';
import { StyleSheet, Modal, Dimensions, View, Text } from 'react-native';

export default ({children, visibility }) => {
    return (
        <Modal
            animationType={'slide'}
            transparent={true}
            visible={visibility}
        >
            <View style={styles.center}>
                <View style={styles.modalview}>
                    {children}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modalview: {
        minWidth: Dimensions.get('window').width - 100,
        backgroundColor: '#FFF',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
});