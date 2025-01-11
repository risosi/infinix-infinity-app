import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebViewPage() {
  return (
    <View style={styles.container}>
      <WebView style={styles.webview} source={{ uri: 'https://theinfinixrealestate.com/' }} />
    </View>
  );
}

WebViewPage.options = {
  headerShown: false, // This will hide the top navigation bar for this screen
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 },
});
