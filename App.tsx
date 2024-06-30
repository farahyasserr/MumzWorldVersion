import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import AppNavigator from './src/navigation';
import colors from './src/theme/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <AppNavigator />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 0 : 20,
    backgroundColor: colors.white
  },
});