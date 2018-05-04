import React from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
  handleParticipantsPress = () => {
    this.props.navigation.navigate('Participants');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../images/workshop.jpg')}
          style={styles.image}
        />

        <Text style={styles.heading}>App-workshop</Text>

        <Text style={styles.text}>Her har du siste sjanse til å lære deg noe kult før eksamensperioden kicker inn! FU-ii, Fagutvalget Infomedia og Linjeforeningen Root inviterer deg til å realisere appen du alltid har snakket om å lage! Det gjør ingenting om du ikke kan mobilutvikling fra før, for Knowit kommer for å holde workshop i React Native.</Text>

        <Button
          onPress={this.handleParticipantsPress}
          title="Se deltakere"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 200
  },
  heading: {
    fontSize: 32,
    padding: 8
  },
  text: {
    padding: 8
  }
});
