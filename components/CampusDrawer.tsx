import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, Dimensions, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { palette } from '@/constants/colors';

type CampusDrawerProps = {
  visible: boolean;
  onClose: () => void;
};

const drawerItems = [
  { icon: 'person-outline', label: 'Your activity' },
  { icon: 'archive-outline', label: 'Archive' },
  { icon: 'bookmark-outline', label: 'Saved' },
  { icon: 'qr-code-outline', label: 'QR code' },
  { icon: 'settings-outline', label: 'Settings and privacy' },
] as const;

const drawerWidth = Math.min(Dimensions.get('window').width * 0.82, 320);

export function CampusDrawer({ visible, onClose }: CampusDrawerProps) {
  const slideX = useRef(new Animated.Value(-drawerWidth)).current;

  useEffect(() => {
    Animated.timing(slideX, {
      duration: 220,
      toValue: visible ? 0 : -drawerWidth,
      useNativeDriver: true,
    }).start();
  }, [slideX, visible]);

  const handleLogout = () => {
    onClose();
    setTimeout(() => {
      router.dismissAll();
      router.replace('/');
    }, 120);
  };

  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.modal}>
        <Pressable style={styles.backdrop} onPress={onClose} />
        <Animated.View style={[styles.drawer, { transform: [{ translateX: slideX }], width: drawerWidth }]}>
          <View style={styles.header}>
            <View style={styles.brand}>
              <Ionicons name="logo-instagram" size={27} color={palette.text} />
              <Text style={styles.title}>CampusGram</Text>
            </View>
            <Pressable onPress={onClose} hitSlop={10}>
              <Ionicons name="close" size={26} color={palette.text} />
            </Pressable>
          </View>

          {drawerItems.map((item) => (
            <Pressable key={item.label} style={styles.item}>
              <Ionicons name={item.icon} size={24} color={palette.text} />
              <Text style={styles.itemText}>{item.label}</Text>
            </Pressable>
          ))}

          <View style={styles.separator} />
          <Pressable style={styles.item} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={24} color={palette.accent} />
            <Text style={[styles.itemText, styles.logout]}>Log out</Text>
          </Pressable>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
  },
  brand: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  drawer: {
    backgroundColor: palette.card,
    elevation: 12,
    height: '100%',
    left: 0,
    paddingBottom: 34,
    paddingHorizontal: 18,
    paddingTop: 54,
    position: 'absolute',
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    top: 0,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
    minHeight: 52,
  },
  itemText: {
    color: palette.text,
    fontSize: 16,
    fontWeight: '600',
  },
  logout: {
    color: palette.accent,
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    flex: 1,
  },
  separator: {
    backgroundColor: palette.border,
    height: StyleSheet.hairlineWidth,
    marginVertical: 8,
  },
  title: {
    color: palette.text,
    fontSize: 20,
    fontWeight: '800',
  },
});
