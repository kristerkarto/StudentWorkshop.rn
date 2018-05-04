import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Avatar = ({ imageUrl, name }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8
  }
});


export default Avatar;