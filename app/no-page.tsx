import { useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function NoPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You chose not to purchase property.</Text>
      <Button title="Go Back to Main Page" onPress={() => router.push('/')} />
      {/* <WebView style={styles.webview} source={{ uri: 'https://theinfinixrealestate.com/' }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 10 },
  text: { fontSize: 18, textAlign: 'center', marginVertical: 20 },
  webview: { flex: 1 },
});
