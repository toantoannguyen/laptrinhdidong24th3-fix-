// screens/OtpScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OtpScreen = ({ route }) => {
  const { country, phone } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.message}>
        An OTP has been sent to {country.name} ({country.code}) {phone}
      </Text>
      {/* Thêm logic nhập OTP ở đây nếu cần */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});

export default OtpScreen;
