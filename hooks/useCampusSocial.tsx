import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { notifications as initialNotifications, posts as initialPosts, stories } from '@/data/campusData';
import { NotificationItem, Post } from '@/types/social';

type NewPost = {
  image: string;
  caption: string;
};

type CampusSocialValue = {
  posts: Post[];
  profilePosts: string[];
  notifications: NotificationItem[];
  toggleLike: (postId: string) => void;
  toggleSave: (postId: string) => void;
  addComment: (postId: string, text: string) => void;
  addPost: (post: NewPost) => void;
};

const CampusSocialContext = createContext<CampusSocialValue | undefined>(undefined);

export function CampusSocialProvider({ children }: PropsWithChildren) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);

  const addNotification = (notification: Omit<NotificationItem, 'id' | 'time'>) => {
    setNotifications((currentNotifications) => [
      {
        ...notification,
        id: `notification-${Date.now()}`,
        time: 'now',
      },
      ...currentNotifications,
    ]);
  };

  const toggleLike = (postId: string) => {
    const likedPost = posts.find((post) => post.id === postId);

    setPosts((currentPosts) =>
      currentPosts.map((post) => {
        if (post.id !== postId) {
          return post;
        }

        const liked = !post.liked;

        return {
          ...post,
          liked,
          likes: liked ? post.likes + 1 : Math.max(0, post.likes - 1),
        };
      }),
    );

    if (likedPost && !likedPost.liked) {
      addNotification({
        username: 'You',
        avatar: stories[0].avatar,
        activity: `liked ${likedPost.username}'s post.`,
        type: 'like',
        postId,
      });
    }
  };

  const toggleSave = (postId: string) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) => (post.id === postId ? { ...post, saved: !post.saved } : post)),
    );
  };

  const addComment = (postId: string, text: string) => {
    const trimmedText = text.trim();
    const commentedPost = posts.find((post) => post.id === postId);

    if (!trimmedText || !commentedPost) {
      return;
    }

    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: `comment-${Date.now()}`,
                  username: 'Pauline',
                  text: trimmedText,
                },
              ],
            }
          : post,
      ),
    );

    addNotification({
      username: 'You',
      avatar: stories[0].avatar,
      activity: `commented on ${commentedPost.username}'s post.`,
      type: 'comment',
      postId,
    });
  };

  const addPost = ({ image, caption }: NewPost) => {
    const trimmedCaption = caption.trim();
    const trimmedImage = image.trim();

    if (!trimmedCaption || !trimmedImage) {
      return;
    }

    setPosts((currentPosts) => [
      {
        id: `post-${Date.now()}`,
        username: 'Pauline',
        avatar: stories[0].avatar,
        image: trimmedImage,
        likes: 0,
        liked: false,
        saved: false,
        caption: trimmedCaption,
        timePosted: 'now',
        comments: [],
      },
      ...currentPosts,
    ]);
  };

  return (
    <CampusSocialContext.Provider
      value={{
        posts,
        profilePosts: posts.map((post) => post.image),
        notifications,
        toggleLike,
        toggleSave,
        addComment,
        addPost,
      }}>
      {children}
    </CampusSocialContext.Provider>
  );
}

export function useCampusSocial() {
  const context = useContext(CampusSocialContext);

  if (!context) {
    throw new Error('useCampusSocial must be used inside CampusSocialProvider');
  }

  return context;
}
