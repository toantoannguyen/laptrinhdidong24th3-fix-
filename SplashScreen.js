// screens/SplashScreen.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("OnboardingScreen");
    }, 3000);
  }, [navigation]);

  return (
    <LinearGradient colors={["#A8E063", "#FFFFFF"]} style={styles.container}>
      <Animatable.View animation="bounceIn" style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://via.placeholder.com/100.png?text=Giỏ+Rau+Củ",
          }}
          style={styles.logoImage}
        />
        <Text style={styles.appName}>FreshCart</Text>
        <Text style={styles.tagline}>Hàng Tươi Ngon, Giao Tận Cửa</Text>
      </Animatable.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  appName: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  tagline: {
    fontSize: 16,
    color: "#4CAF50",
  },
});

export default SplashScreen;
