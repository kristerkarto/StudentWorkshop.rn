import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import config from '../config/config';

import ParticipantCard from '../components/ParticipantCard';

export default class ParticipantsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      participants: []
    }
  }

  componentWillMount() {
    return fetch(config.GetParticipantsUrl())
      .then(res => res.json())
      .then(res => {
        this.setState({
          isLoading: false,
          participants: res
        })
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Deltakere</Text>

        <React.Fragment>
          {this.state.isLoading ?
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" />
            </View> :
            <FlatList
              data={this.state.participants}
              keyExtractor={(item, index) => index}
              numColumns={3}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('ParticipantDetails', { participant: item })}>
                    <ParticipantCard
                      imageUrl={item.githubAccount.avatar_url}
                      name={item.name}
                    />
                  </TouchableOpacity>
                )
              }}
            />
          }
        </React.Fragment>          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading: {
    fontSize: 32,
    padding: 8
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {

  }
});
