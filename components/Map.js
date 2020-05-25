import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default ({onLongPress, points, pointsFilter}) => {
    return (
        <MapView 
        style={styles.mapview}
        onLongPress={onLongPress}
        >
        {pointsFilter && points.map(p => 
            <Marker
            coordinate={p.coordinate}
            title={p.name}
            key={p.name}
            >
            </Marker>
        )}
        </MapView>
    );
}

const styles = StyleSheet.create({
    mapview: {
        height: Dimensions.get('window').height - 150,
        width: Dimensions.get('window').width,
      },
});
