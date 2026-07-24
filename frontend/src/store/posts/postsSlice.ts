import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { Post } from "../../types/post";
import { loadPosts, createPost, deletePost } from "./poststhunks";

interface PostState {
   posts: Post[];
   loading:boolean;
   error: string | null;
   filter:string;
}

const initialState : PostState = {
   posts:[],
   loading: false,
   error:null,
   filter:""
}

const postsSlice = createSlice({
   name: "posts",
   initialState,
   reducers: {
      setFilter(state, action: PayloadAction<string>) {
         state.filter = action.payload
      }
   },
   extraReducers: (builder) => {
      builder.addCase(
         loadPosts.pending,
         (state) => {
            state.loading = true;
            state.error = null;
         }
      );

      builder.addCase(
         loadPosts.fulfilled,
         (state, action) => {
            state.posts = action.payload
            state.loading=false
         }
      );

      builder.addCase(
         loadPosts.rejected,
         (state) => {
            state.loading = false;
            state.error = "Failed to load posts"
         }
      )

      builder.addCase(
         createPost.fulfilled,
         (state, action) => {
            state.posts.push(action.payload)
         } 
      )

      builder.addCase(
         deletePost.fulfilled,
         (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload.id)
         }
      )
   }  
})
export const {setFilter} = postsSlice.actions
export default postsSlice.reducer