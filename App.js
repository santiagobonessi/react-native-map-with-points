import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components';

export default function App() {
  const [points, setPoints] = useState([]); 
  const [tempPoint, setTempPoint] = useState({}); 
  const [namePoint, setnamePoint] = useState(''); 
  const [visibility, setVisibility] = useState(false); 
  const [pointsFilter, setPointsFilter] = useState(true); 
  const [modalFilter, setModalFilter] = useState('new_point'); // new_point or all_points 
  
  const togglePointsFilter = () => setPointsFilter(!pointsFilter);

  const handleLongPress = ({nativeEvent}) => {
    setModalFilter('new_point');
    const newPoints = points.concat({coordinate: nativeEvent.coordinate});
    setTempPoint(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = text => {
    setnamePoint(text);
  };

  const handleSubmit = () => {
    if(namePoint === '' || !tempPoint) { return };
    const newPoint = {
      name: namePoint,
      coordinate: tempPoint,
    };
    setPoints(points.concat(newPoint));
    setVisibility(false);
    setnamePoint('');
  };

  const handleCancel = () => {
    setVisibility(false);
    setnamePoint('');
  };

  const handleLista = () => {
    setModalFilter('all_points');
    setVisibility(true);
  };
  
  return (
    <View style={styles.container}>
      <Map 
      onLongPress={handleLongPress}
      points={points}
      pointsFilter={pointsFilter}
      />
      <Panel 
      onPressLeft={handleLista} 
      textLeft = {'List'}
      togglePointsFilter= {togglePointsFilter}
      textRight = {'Show/Hide'}
      />
      <Modal visibility={visibility} >
        {modalFilter === 'new_point' 
        ?
        <View style={styles.form}>
          <Input title={'Name'} placeholder={'Point Name'} onChangeText={handleChangeText}/>
          <View style={styles.buttons}>
            <Button title={'Cancel'} onPress={handleCancel}/>
            <Button title={'Ok'} onPress={handleSubmit}/>
          </View>
        </View>
        :
        <List points={points} closeModal={() => {setVisibility(false)}}> 
        </List>
        }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  form: {
    padding: 20,
  }
});
