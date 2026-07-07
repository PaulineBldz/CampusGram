import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { palette } from '@/constants/colors';
import { validCredentials } from '@/data/campusData';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.trim() === validCredentials.username && password === validCredentials.password) {
      setError('');
      router.replace('/(tabs)');
      return;
    }

    setError('Incorrect username or password.');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.screen}>
      <View style={styles.logoMark}>
        <Ionicons name="logo-instagram" size={48} color="#FFFFFF" />
      </View>
      <Text style={styles.title}>CampusGram</Text>
      <Text style={styles.subtitle}>Share the best moments around campus.</Text>

      <View style={styles.form}>
        <TextInput
          autoCapitalize="none"
          placeholder="Username"
          placeholderTextColor={palette.muted}
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={palette.muted}
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
      </View>
      <Text style={styles.hint}>Demo: paulinebaldoz / 12345678</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: palette.accent,
    borderRadius: 8,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  error: {
    color: palette.accentDark,
    fontSize: 13,
    fontWeight: '600',
  },
  form: {
    gap: 12,
    marginTop: 30,
    width: '100%',
  },
  hint: {
    color: palette.muted,
    fontSize: 12,
    marginTop: 18,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: palette.border,
    borderRadius: 8,
    borderWidth: 1,
    color: palette.text,
    fontSize: 15,
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  logoMark: {
    alignItems: 'center',
    backgroundColor: palette.accent,
    borderRadius: 24,
    height: 76,
    justifyContent: 'center',
    width: 76,
  },
  screen: {
    alignItems: 'center',
    backgroundColor: palette.background,
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  subtitle: {
    color: palette.muted,
    fontSize: 15,
    marginTop: 8,
    textAlign: 'center',
  },
  title: {
    color: palette.text,
    fontSize: 34,
    fontWeight: '900',
    marginTop: 18,
  },
});
