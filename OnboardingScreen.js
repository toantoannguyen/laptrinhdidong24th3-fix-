// screens/OnboardingScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: "https://via.placeholder.com/500.png?text=Giỏ+Tạp+Hóa" }}
      style={styles.container}
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>Mua Sắm Tươi Ngon, Mọi Lúc!</Text>
        <Text style={styles.subtitle}>
          Khám phá đa dạng thực phẩm, giao đến tận cửa trong vòng một giờ.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignInScreen")} // Chuyển sang SignInScreen
        >
          <Icon name="shopping-cart" size={24} color="#FFF" />
          <Text style={styles.buttonText}>Bắt Đầu Mua Sắm</Text>
        </TouchableOpacity>
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#2E7D32",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#FF9800",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    marginLeft: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#B0BEC5",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#FF9800",
  },
});

export default OnboardingScreen;
