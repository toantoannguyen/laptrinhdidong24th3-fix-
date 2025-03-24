// screens/SignInScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const SignInScreen = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Bangladesh",
    code: "+880",
    flag: "https://flagcdn.com/w40/bd.png",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const countries = [
    {
      name: "Bangladesh",
      code: "+880",
      flag: "https://flagcdn.com/w40/bd.png",
    },
    { name: "Vietnam", code: "+84", flag: "https://flagcdn.com/w40/vn.png" },
    {
      name: "United States",
      code: "+1",
      flag: "https://flagcdn.com/w40/us.png",
    },
    { name: "India", code: "+91", flag: "https://flagcdn.com/w40/in.png" },
  ];

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  const handleContinue = () => {
    if (phoneNumber.length >= 10) {
      // Truyền thông tin quốc gia và số điện thoại sang màn hình tiếp theo
      navigation.navigate("OtpScreen", {
        country: selectedCountry,
        phone: `${selectedCountry.code}${phoneNumber}`,
      });
    } else {
      alert("Please enter a valid phone number");
    }
  };

  return (
    <ImageBackground
      source={{ uri: "https://via.placeholder.com/500.png?text=Rau+Củ" }}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>shopping cùng Toàn nguyễn</Text>

        {/* Ô nhập mã quốc gia và số điện thoại */}
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity
            style={styles.countryCodeContainer}
            onPress={() => setModalVisible(true)}
          >
            <Image source={{ uri: selectedCountry.flag }} style={styles.flag} />
            <Text style={styles.countryCode}>{selectedCountry.code}</Text>
            <Icon name="keyboard-arrow-down" size={24} color="#000" />
          </TouchableOpacity>

          <TextInput
            style={styles.phoneNumberInput}
            value={phoneNumber}
            onChangeText={(text) => {
              if (/^\d*$/.test(text) && text.length <= 10) {
                setPhoneNumber(text);
              }
            }}
            keyboardType="numeric"
            placeholder="Enter your number"
            placeholderTextColor="#999"
          />
        </View>

        {/* Nút tiếp tục */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Icon name="arrow-forward" size={24} color="#FFF" />
        </TouchableOpacity>

        {/* Modal danh sách quốc gia */}
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>chọn quốc gia</Text>
              <FlatList
                data={countries}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.countryItem}
                    onPress={() => handleSelectCountry(item)}
                  >
                    <Image source={{ uri: item.flag }} style={styles.flag} />
                    <Text style={styles.countryName}>
                      {item.name} ({item.code})
                    </Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Dòng chữ "Or connect with social media" */}
        <Text style={styles.socialText}>đăng nhập bằng mạng xã hội khác</Text>

        {/* Nút Google */}
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Icon
            name="google"
            size={24}
            color="#FFF"
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Tiếp tục với Google</Text>
        </TouchableOpacity>

        {/* Nút Facebook */}
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Icon
            name="facebook"
            size={24}
            color="#FFF"
            style={styles.socialIcon}
          />
          <Text style={styles.socialButtonText}>Tiếp tục với Facebook</Text>
        </TouchableOpacity>
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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 30,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 20,
    width: "80%",
  },
  countryCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
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
    flex: 1,
    fontSize: 18,
    color: "#000",
    padding: 10,
  },
  continueButton: {
    backgroundColor: "#4CAF50",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  socialText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: "80%",
  },
  googleButton: {
    backgroundColor: "#4285F4",
  },
  facebookButton: {
    backgroundColor: "#3B5998",
  },
  socialIcon: {
    marginRight: 10,
  },
  socialButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  countryName: {
    fontSize: 16,
    color: "#000",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#FF9800",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default SignInScreen;
