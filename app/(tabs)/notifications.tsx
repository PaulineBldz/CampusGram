import { router } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { palette } from '@/constants/colors';
import { useCampusSocial } from '@/hooks/useCampusSocial';
import { NotificationItem } from '@/types/social';

function NotificationRow({ item }: { item: NotificationItem }) {
  const openNotification = () => {
    if (item.postId) {
      router.push({ pathname: '/post/[id]', params: { id: item.postId } });
    }
  };

  return (
    <Pressable style={styles.row} onPress={openNotification}>
      <Avatar uri={item.avatar} size={44} />
      <View style={styles.rowText}>
        <Text style={styles.activity}>
          <Text style={styles.username}>{item.username} </Text>
          {item.activity}
        </Text>
        <Text style={styles.time}>{item.time} ago</Text>
      </View>
    </Pressable>
  );
}

export default function NotificationsScreen() {
  const { notifications } = useCampusSocial();

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationRow item={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  activity: {
    color: palette.text,
    fontSize: 14,
    lineHeight: 20,
  },
  list: {
    paddingTop: 12,
  },
  row: {
    alignItems: 'center',
    backgroundColor: palette.card,
    borderBottomColor: palette.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    gap: 12,
    padding: 14,
  },
  rowText: {
    flex: 1,
  },
  screen: {
    backgroundColor: palette.background,
    flex: 1,
    paddingTop: 56,
  },
  time: {
    color: palette.muted,
    fontSize: 12,
    marginTop: 2,
  },
  title: {
    color: palette.text,
    fontSize: 26,
    fontWeight: '900',
    paddingHorizontal: 16,
  },
  username: {
    fontWeight: '800',
  },
});
