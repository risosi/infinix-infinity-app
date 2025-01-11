import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import axios from "axios"; // Install axios using `npm install axios`

const CountrySelection = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("Select a Country");
  const [isModalVisible, setModalVisible] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch countries from the API
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const sortedCountries = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        ); // Sort countries alphabetically
        setCountries(sortedCountries); // Store sorted country data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setLoading(false);
      });
  }, []);

  const handleSelect = (country) => {
    setSelectedCountry(country.name.common); // Display country name
    setModalVisible(false);
    router.push(`/property-details?country=${country.name.common}`);
  };

  return (
    <View style={styles.container}>
      {/* Dropdown Button */}
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownButtonText}>{selectedCountry}</Text>
      </TouchableOpacity>

      {/* Modal for Dropdown List */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {loading ? (
              <ActivityIndicator size="large" color="#007bff" />
            ) : (
              <FlatList
                data={countries}
                keyExtractor={(item) => item.cca3} // Use country code as key
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.listItem}
                    onPress={() => handleSelect(item)}
                  >
                    <Text style={styles.listItemText}>{item.name.common}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  dropdownButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  dropdownButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "80%",
    maxHeight: "50%",
    padding: 10,
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  listItemText: {
    fontSize: 16,
  },
});

export default CountrySelection;
