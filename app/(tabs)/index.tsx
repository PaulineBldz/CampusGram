import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { CampusDrawer } from '@/components/CampusDrawer';
import { PostCard } from '@/components/PostCard';
import { StoryList } from '@/components/StoryList';
import { palette } from '@/constants/colors';
import { useCampusSocial } from '@/hooks/useCampusSocial';

export default function HomeScreen() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { posts, toggleLike, toggleSave } = useCampusSocial();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.brand}>
          <Ionicons name="logo-instagram" size={28} color={palette.text} />
          <Text style={styles.title}>CampusGram</Text>
        </View>
        <View style={styles.headerActions}>
          <Pressable hitSlop={10}>
            <Ionicons name="heart-outline" size={27} color={palette.text} />
          </Pressable>
          <Pressable hitSlop={10}>
            <Ionicons name="chatbubble-ellipses-outline" size={26} color={palette.text} />
          </Pressable>
          <Pressable onPress={() => setDrawerVisible(true)} hitSlop={10}>
            <Ionicons name="menu-outline" size={30} color={palette.text} />
          </Pressable>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} onToggleLike={toggleLike} onToggleSave={toggleSave} />}
        ListHeaderComponent={<StoryList />}
        showsVerticalScrollIndicator={false}
      />
      <CampusDrawer visible={drawerVisible} onClose={() => setDrawerVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: palette.card,
    borderBottomColor: palette.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  headerActions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 17,
  },
  brand: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
  },
  screen: {
    backgroundColor: palette.background,
    flex: 1,
  },
  title: {
    color: palette.text,
    fontSize: 29,
    fontStyle: 'italic',
    fontWeight: '800',
  },
});
