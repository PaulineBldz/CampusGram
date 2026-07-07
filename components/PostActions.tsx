import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import { palette } from '@/constants/colors';

type PostActionsProps = {
  liked?: boolean;
  saved?: boolean;
  onToggleLike: () => void;
  onToggleSave: () => void;
  onComment?: () => void;
  onShare?: () => void;
};

export function PostActions({
  liked = false,
  saved = false,
  onToggleLike,
  onToggleSave,
  onComment,
  onShare,
}: PostActionsProps) {
  return (
    <View style={styles.actions}>
      <View style={styles.leftActions}>
        <Pressable onPress={onToggleLike} hitSlop={8}>
          <Ionicons name={liked ? 'heart' : 'heart-outline'} size={26} color={liked ? palette.accent : palette.text} />
        </Pressable>
        <Pressable onPress={onComment} hitSlop={8}>
          <Ionicons name="chatbubble-outline" size={24} color={palette.text} />
        </Pressable>
        <Pressable onPress={onShare} hitSlop={8}>
          <Ionicons name="paper-plane-outline" size={24} color={palette.text} />
        </Pressable>
      </View>
      <Pressable onPress={onToggleSave} hitSlop={8}>
        <Ionicons name={saved ? 'bookmark' : 'bookmark-outline'} size={24} color={palette.text} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  leftActions: {
    flexDirection: 'row',
    gap: 16,
  },
});
