import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { WebView } from "react-native-webview";

export default function PropertyDetails() {
  const router = useRouter();
  const { country } = useLocalSearchParams();
  console.log("Country:", country);
  const [propertyDetails, setPropertyDetails] = useState({
    name: "",
    email: "",
    propertyType: "",
  });

  const handleSubmit = () => {
    console.log("Collected Data:", { ...propertyDetails, country });
    alert("Details submitted successfully!");
    router.push("/web-view");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Country: {country}</Text>
      <TextInput
        placeholder="Your Name"
        style={styles.input}
        onChangeText={(text) =>
          setPropertyDetails({ ...propertyDetails, name: text })
        }
      />
      <TextInput
        placeholder="Your Email"
        style={styles.input}
        onChangeText={(text) =>
          setPropertyDetails({ ...propertyDetails, email: text })
        }
      />
      <TextInput
        placeholder="Property Type"
        style={styles.input}
        onChangeText={(text) =>
          setPropertyDetails({ ...propertyDetails, propertyType: text })
        }
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 18, textAlign: "center", marginVertical: 20 },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  webview: { flex: 1 },
});
