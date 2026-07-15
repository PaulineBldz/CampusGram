import { NotificationItem, Post, Story } from '@/types/social';

export const validCredentials = {
  username: 'paulinebaldoz',
  password: '12345678',
};

export const stories: Story[] = [
  {
    id: 'story-1',
    username: 'Pauline',
    avatar: 'https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-1/711027056_2260677698009284_3516116135675053663_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s100x100&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=e6MKnVpM1d0Q7kNvwF-dvP3&_nc_oc=Adq89dfHA9jIavHGUu3ryltiBFh0zYs_6zrHKZ6a12-dgMAahEkqlLq3hCVxjapEBqs&_nc_zt=24&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=FRvYMh9fOBiQjvXHClEKHQ&_nc_ss=7b289&oh=00_AQCg_OVozZycOQxxyPaWSVS7ZjGjN40Gy4aohZhElMs-Dw&oe=6A4F7012',
  },
  {
    id: 'story-2',
    username: 'Harrold',
    avatar: 'https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-1/495387051_1240946584378120_8906196422763726227_n.jpg?stp=dst-jpg_tt6&cstp=mx1168x1175&ctp=s200x200&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=1d2534&_nc_ohc=GA0s4I6RxO4Q7kNvwFPXeRP&_nc_oc=Adp96i3MIDKVwRT8u2BYDonXbVqQ5ZfKFPPUTyuY1zSOaYMxlTN9I0cuihKT36Cnj8s&_nc_zt=24&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=RMIcdgvxYyijN29ho5YItw&_nc_ss=7b289&oh=00_AQD2COu47NxpVVh-QL-IQ7-OARzZeZDja6UDSLA7foih3Q&oe=6A4F89B2',
  },
  {
    id: 'story-3',
    username: 'Jennie',
    avatar: 'https://i.pinimg.com/736x/af/fe/85/affe859d58216484d59f29d2921b114a.jpg',
  },
  {
    id: 'story-4',
    username: 'Marlo',
    avatar: 'https://i.pinimg.com/736x/63/fd/63/63fd63d1104eb267cc4c5ca8f9c27e2d.jpg',
  },
  {
    id: 'story-5',
    username: 'Chilsea',
    avatar: 'https://i.pinimg.com/736x/67/58/52/6758522e4679ce6369c02104ad014742.jpg',
  },
  {
    id: 'story-5',
    username: 'Jenny',
    avatar: 'https://i.pinimg.com/736x/58/d3/b2/58d3b2e0d310da82a02b83cb8d710cd6.jpg',
  },
  {
    id: 'story-5',
    username: 'Kyla',
    avatar: 'https://i.pinimg.com/736x/58/d3/b2/58d3b2e0d310da82a02b83cb8d710cd6.jpg',
  },
  {
    id: 'story-5',
    username: 'Christian',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMKfXuBahMyF8qNDT20XpMkPRHEkuMxuBTlLxDbsmG7y97P2Sk2SpY8MX-mv8UZMxwpnsjMduj-yQJHD-K5wZi3YiwKh8lPdIWtzxzCAmzQ&s=10',
  },
];

export const posts: Post[] = [
  {
    id: 'post-1',
    username: 'Pauline',
    avatar: 'https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-1/711027056_2260677698009284_3516116135675053663_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s100x100&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=e6MKnVpM1d0Q7kNvwF-dvP3&_nc_oc=Adq89dfHA9jIavHGUu3ryltiBFh0zYs_6zrHKZ6a12-dgMAahEkqlLq3hCVxjapEBqs&_nc_zt=24&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=FRvYMh9fOBiQjvXHClEKHQ&_nc_ss=7b289&oh=00_AQCg_OVozZycOQxxyPaWSVS7ZjGjN40Gy4aohZhElMs-Dw&oe=6A4F7012',
    image: 'https://i.pinimg.com/736x/0e/04/7b/0e047bc221ca2cd62ba771aab54bece7.jpg',
    likes: 248,
    caption: 'Golden hour after our campus org fair. Best way to end a long class day.',
    timePosted: '12m',
    comments: [
      { id: 'c1', username: 'arvin.lab', text: 'I love your smile Jennie <3' },
      { id: 'c2', username: 'lara.codes', text: 'Saving this spot for our next shoot.' },
    ],
  },
  {
    id: 'post-2',
    username: 'Rosie Rosie',
    avatar: 'https://i.pinimg.com/736x/d0/82/09/d08209dbfd162037e895d7281732716e.jpg',
    image: 'https://i.pinimg.com/736x/bf/13/58/bf1358afe817b88e0ef45ef703d389e9.jpg',
    likes: 516,
    caption: 'Late night with you is the best, love yahhh',
    timePosted: '45m',
    comments: [
      { id: 'c3', username: 'mika.cruz', text: 'Your so gorgeous Rosie, love the flowers!' },
      { id: 'c4', username: 'dean_reads', text: 'i love you, rosie' },
    ],
  },
  {
    id: 'post-3',
    username: 'Jennie',
    avatar: 'https://i.pinimg.com/736x/02/46/8b/02468bfc13b08901b6a48a1a6e7270ba.jpg',
    image: 'https://i.pinimg.com/736x/19/48/39/19483970e7b6043ac93ac6e12625b71a.jpg',
    likes: 329,
    caption: 'The city never sleeps, and neither does my camera.',
    timePosted: '2h',
    comments: [
      { id: 'c5', username: 'jules.art', text: 'You’re killing it in every way! 🙌.' },
      { id: 'c6', username: 'arvin.lab', text: 'Proud mentor moment.' },
    ],
  },
  { 
    id: 'post-4',
    username: 'Jisoo',
    avatar: 'https://i.pinimg.com/736x/29/10/84/291084132b75f6b60740db5dfc064e64.jpg',
    image: 'https://i.pinimg.com/736x/37/0a/d9/370ad93d12abe7886d3b0f90a2a0cb3d.jpg',
    likes: 329,
    caption: '“There’s nothing more beautiful than the way the ocean refuses to stop kissing the shoreline, no matter how many times it’s sent away.” – Sarah Kay',
    timePosted: '2h',
    comments: [
      { id: 'c5', username: 'jules.art', text: 'You’re killing it in every way! 🙌.' },
      { id: 'c6', username: 'arvin.lab', text: 'Love it, Jisoo' },
    ],
  },
  { 
    id: 'post-5',
    username: 'Jennie',
    avatar: 'https://i.pinimg.com/736x/02/46/8b/02468bfc13b08901b6a48a1a6e7270ba.jpg',
    image: 'https://i.pinimg.com/736x/43/e8/6b/43e86b966a837acced9159131cabb8ca.jpg',
    likes: 329,
    caption: '“There’s nothing more beautiful than the way the ocean refuses to stop kissing the shoreline, no matter how many times it’s sent away.” – Sarah Kay',
    timePosted: '2h',
    comments: [
      { id: 'c5', username: 'jules.art', text: 'You’re killing it in every way! 🙌.' },
      { id: 'c6', username: 'arvin.lab', text: 'Love it, Jisoo' },
    ],
  },
];

export const notifications: NotificationItem[] = [
  {
    id: 'n1',
    username: 'arvin.lab',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    activity: 'liked your campus fair photo.',
    time: '5m',
    type: 'like',
    postId: 'post-1',
  },
  {
    id: 'n2',
    username: 'lara.codes',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
    activity: 'your so gorgeous rosieee',
    time: '18m',
    type: 'comment',
    postId: 'post-2',
  },
  {
    id: 'n3',
    username: 'dean_reads',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    activity: 'started following you.',
    time: '1h',
    type: 'follow',
  },
  {
    id: 'n4',
    username: 'jules.art',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop',
    activity: 'liked your workshop photo.',
    time: '3h',
    type: 'like',
    postId: 'post-3',
  },
];

export const profilePosts = posts.map((post) => post.image);
