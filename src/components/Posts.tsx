'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Reactions = number | { likes: number; dislikes: number };

type Post = {
  id: number;
  title: string;
  body: string;
  reactions: Reactions;
  userId: number;
  tags: string[];
};

interface PostCardProps {
  post: Post;
  onView: (post: Post) => void;
}

interface PostModalProps {
  post: Post;
  onClose: () => void;
}

function PostModal({ post, onClose }: PostModalProps) {
  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-4'>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3 }}
        className='bg-zinc-900 text-white p-6 rounded-xl max-w-2xl w-full relative shadow-xl'
      >
        <h3 className='text-2xl font-bold text-cyan-300 mb-4'>{post.title}</h3>
        <p className='text-base text-zinc-200 mb-4'>{post.body}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className='bg-purple-800 text-xs px-2 py-1 rounded-full text-white'
            >
              #{tag}
            </span>
          ))}
        </div>
        <button
          onClick={onClose}
          className='absolute top-2 right-2 bg-red-600 hover:bg-red-500 px-3 py-1 rounded-full text-sm'
        >
          ✖
        </button>
      </motion.div>
    </div>
  );
}

function PostCard({ post, onView }: PostCardProps) {
  const { title, body, reactions, tags, userId } = post;

  const isReactionObject = (
    r: Reactions
  ): r is { likes: number; dislikes: number } =>
    typeof r === 'object' && r !== null && 'likes' in r && 'dislikes' in r;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='rounded-2xl bg-gradient-to-br from-zinc-800 to-purple-900 p-6 shadow-xl text-white hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between'
    >
      <div>
        <h3 className='text-2xl font-bold text-cyan-300 mb-2'>{title}</h3>
        <p className='text-sm text-zinc-200 mb-4 leading-relaxed'>{body.slice(0, 150)}...</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='bg-purple-800 text-xs px-2 py-1 rounded-full text-white'
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center mt-4'>
        <div className='text-sm text-purple-300'>
          {isReactionObject(reactions)
            ? `👍 ${reactions.likes} · 👎 ${reactions.dislikes}`
            : `💬 Reactions: ${reactions}`}
          <span className='block text-xs mt-1 opacity-70'>User ID: {userId}</span>
        </div>
        <button
          onClick={() => onView(post)}
          className='bg-cyan-600 hover:bg-cyan-500 text-sm px-4 py-1 rounded-full transition'
        >
          View More
        </button>
      </div>
    </motion.div>
  );
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch('https://dummyjson.com/posts?limit=6')
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className='w-full px-6 py-16 bg-black relative'>
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-4xl md:text-5xl font-extrabold text-center text-white mb-12'
      >
        📰 Latest Hacker News
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onView={setSelectedPost} />
        ))}
      </div>

      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  );
}
