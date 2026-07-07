import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { palette } from '@/constants/colors';
import { useCampusSocial } from '@/hooks/useCampusSocial';

export default function CreateScreen() {
  const [image, setImage] = useState('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&h=900&fit=crop');
  const [caption, setCaption] = useState('');
  const [message, setMessage] = useState('');
  const { addPost } = useCampusSocial();

  const handleShare = () => {
    if (!image.trim() || !caption.trim()) {
      setMessage('Add an image URL and caption first.');
      return;
    }

    addPost({ image, caption });
    setCaption('');
    setMessage('Post shared to your feed.');
    router.navigate('/(tabs)');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Create</Text>
      <View style={styles.uploadBox}>
        <Image source={{ uri: image }} style={styles.preview} />
        <Text style={styles.uploadTitle}>New campus post</Text>
        <Text style={styles.uploadText}>Paste an image URL and write a caption for your feed.</Text>
      </View>
      <View style={styles.inputGroup}>
        <Ionicons name="link-outline" size={20} color={palette.muted} />
        <TextInput
          autoCapitalize="none"
          placeholder="Image URL"
          placeholderTextColor={palette.muted}
          style={styles.urlInput}
          value={image}
          onChangeText={setImage}
        />
      </View>
      <TextInput
        multiline
        placeholder="Write a caption..."
        placeholderTextColor={palette.muted}
        style={styles.captionInput}
        value={caption}
        onChangeText={setCaption}
      />
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <Pressable style={styles.button} onPress={handleShare}>
        <Text style={styles.buttonText}>Share Post</Text>
      </Pressable>
    </View>
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
  captionInput: {
    backgroundColor: palette.card,
    borderColor: palette.border,
    borderRadius: 8,
    borderWidth: 1,
    color: palette.text,
    fontSize: 15,
    minHeight: 110,
    padding: 14,
    textAlignVertical: 'top',
  },
  inputGroup: {
    alignItems: 'center',
    backgroundColor: palette.card,
    borderColor: palette.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 12,
  },
  message: {
    color: palette.muted,
    fontSize: 13,
    fontWeight: '600',
  },
  preview: {
    aspectRatio: 1,
    backgroundColor: palette.border,
    borderRadius: 8,
    width: 150,
  },
  screen: {
    backgroundColor: palette.background,
    flex: 1,
    gap: 18,
    padding: 16,
    paddingTop: 56,
  },
  title: {
    color: palette.text,
    fontSize: 26,
    fontWeight: '900',
  },
  uploadBox: {
    alignItems: 'center',
    backgroundColor: palette.card,
    borderColor: palette.border,
    borderRadius: 8,
    borderStyle: 'dashed',
    borderWidth: 1,
    gap: 8,
    padding: 28,
  },
  uploadText: {
    color: palette.muted,
    fontSize: 14,
    textAlign: 'center',
  },
  uploadTitle: {
    color: palette.text,
    fontSize: 18,
    fontWeight: '800',
  },
  urlInput: {
    color: palette.text,
    flex: 1,
    fontSize: 14,
    paddingVertical: 12,
  },
});
