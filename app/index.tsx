import { useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomePage() {
  const router = useRouter();

  const handleYes = () => {
    router.push('/country-selection');
  };

  const handleNo = () => {
    router.push('/web-view'); // Redirect directly to WebView page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Do you want to purchase property?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Yes" onPress={handleYes} />
        <Button title="No" onPress={handleNo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 10, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 18, textAlign: 'center', marginVertical: 20 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'center', gap: 10, marginBottom: 20 },
});
