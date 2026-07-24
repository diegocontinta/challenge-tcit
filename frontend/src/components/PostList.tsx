import { useEffect } from "react";
import {useAppDispatch, useAppSelector} from "./../store/hooks"
import { loadPosts, deletePost } from "../store/posts/poststhunks";
import PostItem from "./PostItem";
import { selectFilteredPosts } from "../store/posts/postsSelectors";
export default function PostList() {
   const dispatch = useAppDispatch();
   const posts = useAppSelector(selectFilteredPosts)
   const { loading, error } = useAppSelector((state) => state.posts);

   useEffect(() => {
      dispatch(loadPosts())
   }, [dispatch])

return (
   <ul>
      {posts.map((post) => (
         <PostItem 
            key={post.id}
            post={post}
         />
      ))}
   </ul>
);}