import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default ({title, ...rest}) => {
    return (
       <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <TextInput {...rest}/> 
       </View>
    );
}

const styles = StyleSheet.create({
  wrapper: {
      height: 40,
  },
  title: {
      fontSize: 20,
  }
});
