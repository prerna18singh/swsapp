import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import logo from './logo.png'; 

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    // Handle form submission (e.g., API call)
    console.log({ name, email, password });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        <Text style={styles.title}>Get Started With Soft Webtech Solutions</Text>

        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Log In Link */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Log In</Text>
          </TouchableOpacity>
        </View>
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
  loginContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#6b7280',
  },
  loginLink: {
    fontSize: 14,
    color: '#3b82f6',
    textDecorationLine: 'underline',
  },
});

export default SignUp;
