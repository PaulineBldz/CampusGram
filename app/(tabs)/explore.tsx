import { router } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { palette } from '@/constants/colors';
import { useCampusSocial } from '@/hooks/useCampusSocial';

export default function ExploreScreen() {
  const { posts } = useCampusSocial();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <Pressable
            style={styles.tile}
            onPress={() => router.push({ pathname: '/post/[id]', params: { id: item.id } })}>
            <Image source={{ uri: item.image }} style={styles.tileImage} />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    gap: 2,
  },
  header: {
    backgroundColor: palette.card,
    borderBottomColor: palette.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 12,
    paddingHorizontal: 16,
    paddingTop: 56,
  },
  screen: {
    backgroundColor: palette.background,
    flex: 1,
  },
  tile: {
    aspectRatio: 1,
    backgroundColor: palette.border,
    borderColor: palette.background,
    borderWidth: 1,
    flex: 1 / 3,
  },
  tileImage: {
    height: '100%',
    width: '100%',
  },
  title: {
    color: palette.text,
    fontSize: 26,
    fontWeight: '900',
  },
});
