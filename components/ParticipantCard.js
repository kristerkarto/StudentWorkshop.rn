import React from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const containerWidth = Dimensions.get('window').width / 3,
      contentWidth = containerWidth - 16;

const ParticipantCard = ({ imageUrl, name }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl || 'https://placehold.it/500x500' }}
        style={styles.image}
      />

      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    padding: 8
  },
  image: {
    width: contentWidth,
    height: contentWidth,
    borderRadius: contentWidth / 2,
    backgroundColor: '#ccc'
  },
  name: {
    paddingTop: 8,
    lineHeight: 12,
    textAlign: 'center'
  }
});


export default ParticipantCard;