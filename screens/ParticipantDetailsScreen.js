import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Avatar from '../components/Avatar';
import ListItem from '../components/ListItem';
import Meta from '../components/Meta';

export default class ParticipantDetailsScreen extends React.Component {
  state = {
    participant: this.props.navigation.state.params.participant,
    selectedRepo: null
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.participant.name
  });

  handleRepoPress = (id) => {
    this.setState({
      selectedRepo: this.state.selectedRepo === id ? null : id
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Avatar
          imageUrl={this.state.participant.githubAccount.avatar_url}
          name={this.state.participant.githubName}
        />

        <Meta
          bio={this.state.participant.githubAccount.bio}
          email={this.state.participant.githubAccount.email}
          location={this.state.participant.githubAccount.location}
          website={this.state.participant.githubAccount.blog}
        />

        {this.state.participant.githubAccount.repos &&
          <React.Fragment>
            <Text style={styles.subHeading}>Repositories</Text>
            
            <View style={styles.listDivider} />
            {this.state.participant.githubAccount.repos.map((repo, i) =>
              <TouchableOpacity onPress={() => this.handleRepoPress(repo.id)} key={repo.id}>
                <ListItem
                  isLastChild={i === this.state.participant.githubAccount.repos.length -1}
                  isSelected={this.state.selectedRepo === repo.id}
                  name={repo.name}
                />
              </TouchableOpacity>
            )}
            <View style={styles.listDivider} />            
          </React.Fragment>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  subHeading: {
    fontSize: 24,
    padding: 8
  },
  listDivider: {
    backgroundColor: '#ddd',
    height: 1
  }
});
