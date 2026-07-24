import { createAsyncThunk } from "@reduxjs/toolkit";
import { postsApi } from "../../api/postsApi";
import type { CreatePostRequest, Post } from "../../types/post";

export const loadPosts = createAsyncThunk<Post[]>(
   "posts/loadPosts",
   async () => {
      const posts = await postsApi.getAll()
      return posts;
   }
)

export const createPost = createAsyncThunk<Post, CreatePostRequest>(
   "posts/createPost",
   async (request) => {
      return await postsApi.create(request)
   }
)

export const deletePost = createAsyncThunk<Post, string>(
   "posts/deletePost",
   async (request) => {
      return await postsApi.delete(request)
   }
)