import { Post, PostsDocument } from '@/app/src/dto';
import { StateCreator } from 'zustand';
import apolloClient from '@/app/src/apollo';
import { getPostsData } from '@/packages/utils/funcs';

export interface PostSlice {
  posts: Post[];
  likedPosts: Post[];
  setPosts(posts?: Post[]): void;
  getPosts(): Promise<Post[]>;
  setLikedPosts(likedPosts?: Post[]): void;
  getLikedPosts(): Post[];
}

export const postStoreSlice: StateCreator<PostSlice, [], [], PostSlice> = (
  set,
  get
) => ({
  posts: [],
  likedPosts: [],

  async getPosts(): Promise<Post[]> {
    this.setPosts(await getPostsData());
    return await getPostsData();
  },

  async setPosts(posts): Promise<void> {
    if (posts) {
      set({ posts });
      return;
    }

    set({ posts: await getPostsData() });
  },

  setLikedPosts(likedPosts): void {
    set({ likedPosts });
  },

  getLikedPosts(): Post[] {
    return get().posts;
  },
});
