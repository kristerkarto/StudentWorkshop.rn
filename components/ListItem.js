import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const ListItem = ({ isLastChild, isSelected, name }) => {
  return (
    <View
      style={[
        styles.listItem,
        isLastChild && { borderBottomWidth: 0 },
        isSelected && styles.selected
      ]}
    >
      <Text>{name}</Text>
      { isSelected && <Ionicons style={{ marginRight: 8 }} name="ios-checkmark-outline" size={32} /> }
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    height: 44,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  selected: {
    backgroundColor: '#dbf0ff'
  }
});


export default ListItem;