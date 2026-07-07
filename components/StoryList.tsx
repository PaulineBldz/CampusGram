import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { palette } from '@/constants/colors';
import { stories } from '@/data/campusData';
import { Story } from '@/types/social';

function StoryItem({ item }: { item: Story }) {
  return (
    <View style={styles.storyItem}>
      <Avatar uri={item.avatar} size={62} highlighted />
      <Text numberOfLines={1} style={styles.storyName}>
        {item.username}
      </Text>
    </View>
  );
}

export function StoryList() {
  return (
    <FlatList
      horizontal
      data={stories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <StoryItem item={item} />}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: palette.card,
    borderBottomColor: palette.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  storyItem: {
    alignItems: 'center',
    width: 74,
  },
  storyName: {
    color: palette.text,
    fontSize: 12,
    marginTop: 6,
    maxWidth: 72,
  },
});
