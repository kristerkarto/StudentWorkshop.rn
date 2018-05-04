import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Meta = ({ bio, email, location, website  }) => {
  return (
    <View style={styles.container}>
      {bio &&
        <View style={styles.metaContainer}>
          <Ionicons style={styles.metaIcon} name="ios-person-outline" size={20} />
          <Text style={styles.metaData}>{bio}</Text>
        </View>
      }

      {location &&
        <View style={styles.metaContainer}>
          <Ionicons style={styles.metaIcon} name="ios-pin-outline" size={20} />
          <Text style={styles.metaData}>{location}</Text>
        </View>
      }

      {email &&
        <View style={styles.metaContainer}>
          <Ionicons style={styles.metaIcon} name="ios-mail-outline" size={20} />
          <Text style={styles.metaData}>{email}</Text>
        </View>
      }

      {website &&
        <View style={styles.metaContainer}>
          <Ionicons style={styles.metaIcon} name="ios-link-outline" size={20} />
          <Text style={styles.metaData}>{website}</Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16
  },
  metaContainer: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  metaIcon: {
    width: 16,
    textAlign: 'center',
  },
  metaData: {
    marginLeft: 8
  }
});


export default Meta;