import { apiClient } from "./client";
import { CreatePostRequest, Post } from "../types/post";

export const postsApi = {
   getAll: async (): Promise<Post[]> => {
      const { data } = await apiClient.get<Post[]>("/posts/");
      return data;
   },

   create: async (request: CreatePostRequest): Promise<Post> => {
      const { data } =  await apiClient.post<Post>("/posts/", request);
      return data
   },

   delete: async (id:string): Promise<Post> => {
      const {data} =  await apiClient.delete<Post>(`/posts/${id}`);
      return data;
   },

};
