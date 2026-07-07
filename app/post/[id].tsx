import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { PostActions } from '@/components/PostActions';
import { palette } from '@/constants/colors';
import { useCampusSocial } from '@/hooks/useCampusSocial';

export default function PostDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { posts, toggleLike, toggleSave, addComment } = useCampusSocial();
  const [comment, setComment] = useState('');
  const post = posts.find((item) => item.id === id) ?? posts[0];

  const submitComment = () => {
    if (!comment.trim()) {
      return;
    }

    addComment(post.id, comment);
    setComment('');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.screen}>
      <FlatList
        data={post.comments}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={styles.post}>
            <View style={styles.header}>
              <Avatar uri={post.avatar} size={38} />
              <Text style={styles.username}>{post.username}</Text>
            </View>
            <Image source={{ uri: post.image }} style={styles.image} />
            <PostActions
              liked={post.liked}
              saved={post.saved}
              onToggleLike={() => toggleLike(post.id)}
              onToggleSave={() => toggleSave(post.id)}
              onComment={() => undefined}
            />
            <View style={styles.body}>
              <Text style={styles.likes}>{post.likes.toLocaleString()} likes</Text>
              <Text style={styles.caption}>
                <Text style={styles.username}>{post.username} </Text>
                {post.caption}
              </Text>
              <Text style={styles.sectionTitle}>
                {post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'}
              </Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Text style={styles.commentText}>
              <Text style={styles.username}>{item.username} </Text>
              {item.text}
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Be the first to comment.</Text>}
      />
      <View style={styles.composer}>
        <Avatar uri={post.avatar} size={30} />
        <TextInput
          placeholder="Add a comment..."
          placeholderTextColor={palette.muted}
          style={styles.input}
          value={comment}
          onChangeText={setComment}
        />
        <Pressable onPress={submitComment} disabled={!comment.trim()} hitSlop={10}>
          <Text style={[styles.postButton, !comment.trim() && styles.postButtonDisabled]}>Post</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  body: {
    gap: 8,
    padding: 12,
  },
  caption: {
    color: palette.text,
    fontSize: 14,
    lineHeight: 20,
  },
  comment: {
    backgroundColor: palette.card,
    borderBottomColor: palette.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  commentText: {
    color: palette.text,
    fontSize: 14,
    lineHeight: 20,
  },
  composer: {
    alignItems: 'center',
    backgroundColor: palette.card,
    borderTopColor: palette.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  empty: {
    color: palette.muted,
    fontSize: 14,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    padding: 12,
  },
  image: {
    aspectRatio: 1,
    backgroundColor: palette.border,
    width: '100%',
  },
  input: {
    color: palette.text,
    flex: 1,
    fontSize: 14,
    paddingVertical: 8,
  },
  likes: {
    color: palette.text,
    fontSize: 14,
    fontWeight: '800',
  },
  post: {
    backgroundColor: palette.card,
  },
  postButton: {
    color: '#0095F6',
    fontSize: 14,
    fontWeight: '800',
  },
  postButtonDisabled: {
    opacity: 0.35,
  },
  screen: {
    backgroundColor: palette.background,
    flex: 1,
  },
  sectionTitle: {
    color: palette.muted,
    fontSize: 13,
    fontWeight: '800',
    marginTop: 8,
    textTransform: 'uppercase',
  },
  username: {
    color: palette.text,
    fontSize: 14,
    fontWeight: '800',
  },
});
