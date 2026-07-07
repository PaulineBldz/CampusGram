import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { CampusDrawer } from '@/components/CampusDrawer';
import { palette } from '@/constants/colors';
import { stories } from '@/data/campusData';
import { useCampusSocial } from '@/hooks/useCampusSocial';

function ProfileHeader({ postCount, onOpenDrawer }: { postCount: number; onOpenDrawer: () => void }) {
  return (
    <View style={styles.header}>
      <View style={styles.topBar}>
        <Text style={styles.profileTitle}>Pauline Baldoz</Text>
        <View style={styles.topActions}>
          <Pressable hitSlop={10}>
            <Ionicons name="add-circle-outline" size={27} color={palette.text} />
          </Pressable>
          <Pressable onPress={onOpenDrawer} hitSlop={10}>
            <Ionicons name="menu-outline" size={30} color={palette.text} />
          </Pressable>
        </View>
      </View>
      <View style={styles.profileTop}>
        <Avatar uri={stories[0].avatar} size={86} highlighted />
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{postCount}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1.8K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>412</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>
      <Text style={styles.username}>PaulineBldz</Text>
      <Text style={styles.bio}>Dum spiro spero</Text>
      <View style={styles.profileButtons}>
        <Pressable style={styles.profileButton}>
          <Text style={styles.profileButtonText}>Edit profile</Text>
        </Pressable>
        <Pressable style={styles.profileButton}>
          <Text style={styles.profileButtonText}>Share profile</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function ProfileScreen() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { posts, profilePosts } = useCampusSocial();

  return (
    <View style={styles.screen}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <Pressable style={styles.gridImage} onPress={() => router.push({ pathname: '/post/[id]', params: { id: item.id } })}>
            <Image source={{ uri: item.image }} style={styles.gridImageContent} />
          </Pressable>
        )}
        ListHeaderComponent={<ProfileHeader postCount={profilePosts.length} onOpenDrawer={() => setDrawerVisible(true)} />}
        showsVerticalScrollIndicator={false}
      />
      <CampusDrawer visible={drawerVisible} onClose={() => setDrawerVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  bio: {
    color: palette.text,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 6,
  },
  gridImage: {
    aspectRatio: 1,
    backgroundColor: palette.border,
    borderColor: palette.background,
    borderWidth: 1,
    flex: 1 / 3,
  },
  gridImageContent: {
    height: '100%',
    width: '100%',
  },
  header: {
    backgroundColor: palette.card,
    borderBottomColor: palette.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 16,
    paddingTop: 50,
  },
  profileButton: {
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    flex: 1,
    paddingVertical: 8,
  },
  profileButtons: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 14,
  },
  profileButtonText: {
    color: palette.text,
    fontSize: 14,
    fontWeight: '700',
  },
  profileTitle: {
    color: palette.text,
    fontSize: 21,
    fontWeight: '900',
  },
  profileTop: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 18,
    marginTop: 20,
  },
  screen: {
    backgroundColor: palette.background,
    flex: 1,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    color: palette.muted,
    fontSize: 12,
    marginTop: 3,
  },
  statNumber: {
    color: palette.text,
    fontSize: 18,
    fontWeight: '900',
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
  },
  topActions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 18,
  },
  topBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    color: palette.text,
    fontSize: 18,
    fontWeight: '900',
    marginTop: 14,
  },
});
