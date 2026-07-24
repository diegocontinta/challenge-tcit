import type { RootState } from "../store";

export const selectFilteredPosts = (state: RootState) => {
   const {posts, filter} = state.posts
   
   if (!filter.trim()) {
      return posts;
   }

   return posts.filter((post) => post.name.toLowerCase().includes(filter.toLowerCase()));
   
}