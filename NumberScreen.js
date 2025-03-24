// screens/NumberScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const NumberScreen = ({ navigation, route }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const country = route.params?.country || {
    name: "Bangladesh",
    code: "+880",
    flag: "https://flagcdn.com/w40/bd.png",
  };

  const handleNumberPress = (number) => {
    setPhoneNumber(phoneNumber + number);
  };

  const handleDelete = () => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>Enter your mobile number</Text>

      {/* Ô nhập số điện thoại */}
      <View style={styles.phoneInputContainer}>
        <Image source={{ uri: country.flag }} style={styles.flag} />
        <Text style={styles.countryCode}>{country.code} | </Text>
        <TextInput
          style={styles.phoneNumberInput}
          value={phoneNumber}
          onChangeText={setPhoneNumber} // Cập nhật state khi nhập trực tiếp
          keyboardType="numeric" // Chỉ hiển thị bàn phím số
          placeholder="Enter your number"
          placeholderTextColor="#999"
        />
      </View>

      {/* Nút tiếp tục */}
      <TouchableOpacity style={styles.continueButton}>
        <Icon name="arrow-forward" size={24} color="#FFF" />
      </TouchableOpacity>

      {/* Bàn phím số */}
      <View style={styles.keypad}>
        {[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "+*#",
          "0",
          "delete",
        ].map((key, index) => (
          <TouchableOpacity
            key={index}
            style={styles.key}
            onPress={() => {
              if (key === "delete") {
                handleDelete();
              } else {
                handleNumberPress(key);
              }
            }}
          >
            {key === "delete" ? (
              <Icon name="backspace" size={24} color="#000" />
            ) : (
              <Text style={styles.keyText}>{key}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginTop: 60,
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    paddingBottom: 10,
    marginBottom: 30,
  },
  flag: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 18,
    color: "#000",
  },
  phoneNumberInput: {
    fontSize: 18,
    color: "#000",
    flex: 1,
  },
  continueButton: {
    position: "absolute",
    top: 100,
    right: 20,
    backgroundColor: "#4CAF50",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  keypad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  key: {
    width: "30%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  keyText: {
    fontSize: 24,
    color: "#000",
  },
});

export default NumberScreen;
