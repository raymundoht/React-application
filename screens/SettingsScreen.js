import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Settings</Text>
      <Text style={styles.screenText}>Here you can adjust your preferences and configurations.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    padding: 20,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  screenText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
