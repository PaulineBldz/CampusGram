export type Post = {
  id: string;
  username: string;
  avatar: string;
  image: string;
  likes: number;
  liked?: boolean;
  saved?: boolean;
  caption: string;
  timePosted: string;
  comments: Comment[];
};

export type Story = {
  id: string;
  username: string;
  avatar: string;
};

export type Comment = {
  id: string;
  username: string;
  text: string;
};

export type ActivityType = 'like' | 'comment' | 'follow';

export type NotificationItem = {
  id: string;
  username: string;
  avatar: string;
  activity: string;
  time: string;
  type: ActivityType;
  postId?: string;
};
