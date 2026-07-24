import { useEffect } from "react";
import {useAppDispatch, useAppSelector} from "./../store/hooks"
import { loadPosts, deletePost } from "../store/posts/poststhunks";
import PostItem from "./PostItem";
import { selectFilteredPosts } from "../store/posts/postsSelectors";
import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
 } from "../components/ui/table"
export default function PostList() {
   const dispatch = useAppDispatch();
   const posts = useAppSelector(selectFilteredPosts)
   const { loading, error } = useAppSelector((state) => state.posts);

   useEffect(() => {
      dispatch(loadPosts())
   }, [dispatch])

return (
   <Table>
      <TableHeader>
         <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
         </TableRow>
      </TableHeader>
      <TableBody>
      {posts.map((post) => (
         <PostItem 
            key={post.id}
            post={post}
         />
      ))}
      </TableBody>
   </Table>
);}