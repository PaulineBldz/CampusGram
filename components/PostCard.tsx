import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { PostActions } from '@/components/PostActions';
import { palette } from '@/constants/colors';
import { Post } from '@/types/social';

type PostCardProps = {
  post: Post;
  onToggleLike: (postId: string) => void;
  onToggleSave: (postId: string) => void;
};

export function PostCard({ post, onToggleLike, onToggleSave }: PostCardProps) {
  const openPostDetails = () => {
    router.push({ pathname: '/post/[id]', params: { id: post.id } });
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.author}>
          <Avatar uri={post.avatar} size={34} highlighted />
          <Text style={styles.username}>{post.username}</Text>
        </View>
        <Pressable hitSlop={10}>
          <Ionicons name="ellipsis-horizontal" size={22} color={palette.text} />
        </Pressable>
      </View>
      <Image source={{ uri: post.image }} style={styles.postImage} />
      <PostActions
        liked={post.liked}
        saved={post.saved}
        onToggleLike={() => onToggleLike(post.id)}
        onToggleSave={() => onToggleSave(post.id)}
        onComment={openPostDetails}
      />
      <View style={styles.body}>
        <Text style={styles.likes}>{post.likes.toLocaleString()} likes</Text>
        <Text style={styles.caption}>
          <Text style={styles.username}>{post.username} </Text>
          {post.caption}
        </Text>
        <Pressable onPress={openPostDetails}>
          <Text style={styles.comments}>
            {post.comments.length > 0 ? `View all ${post.comments.length} comments` : 'Add a comment...'}
          </Text>
        </Pressable>
        <Text style={styles.time}>{post.timePosted} ago</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    gap: 5,
    padding: 12,
    paddingTop: 8,
  },
  caption: {
    color: palette.text,
    fontSize: 14,
    lineHeight: 20,
  },
  comments: {
    color: palette.muted,
    fontSize: 14,
    marginTop: 2,
  },
  card: {
    backgroundColor: palette.card,
    borderBottomColor: palette.border,
    borderBottomWidth: 8,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  author: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  likes: {
    color: palette.text,
    fontSize: 14,
    fontWeight: '700',
  },
  postImage: {
    aspectRatio: 1,
    backgroundColor: palette.border,
    width: '100%',
  },
  time: {
    color: palette.muted,
    fontSize: 11,
    textTransform: 'uppercase',
  },
  username: {
    color: palette.text,
    fontSize: 14,
    fontWeight: '700',
  },
});
