import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // for navigation
import logo from './logo.png'; // Assuming you have a logo image in your assets

const Forgot = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleSendOtp = () => {
    // Handle sending OTP logic here
    console.log('Sending OTP to:', email);
    navigation.navigate('OTPVerification'); // Navigate to OTP verification screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        <Text style={styles.title}>Forgot Your Password</Text>
        <Text style={styles.description}>
          Enter your email address and we will send you a code to reset your password
        </Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Register Email ID"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Send OTP Button */}
        <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },
  card: {
    width: 350,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Forgot;
