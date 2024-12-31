import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // for navigation (if using React Navigation)
import logo from './logo.png';  // Assuming you have a logo image in your assets

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = () => {
    // Handle form submission (e.g., login API)
    console.log({ email, password, rememberMe });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        
        <Text style={styles.title}>Welcome to Soft Webtech Solutions</Text>
        
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

        {/* Remember Me & Forgot Password */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setRememberMe(!rememberMe)}
          >
            {rememberMe && <View style={styles.checked} />}
          </TouchableOpacity>
          <Text style={styles.rememberText}>Remember Me</Text>

          {/* Forgot Password Link */}
          <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Log In Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupLink}>Sign Up</Text>
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
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#3b82f6',
    borderRadius: 2,
  },
  rememberText: {
    fontSize: 14,
    color: '#6b7280',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#6b7280',
    textDecorationLine: 'underline',
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
  signupContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 14,
    color: '#6b7280',
  },
  signupLink: {
    fontSize: 14,
    color: '#3b82f6',
    textDecorationLine: 'underline',
  },
});

export default Login;
