import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import AppNavigator from './src/navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <AppNavigator />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? 0 : 20
  },
});