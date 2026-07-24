import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setFilter } from "../store/posts/postsSlice"
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function PostFilter() {

   const dispatch = useAppDispatch();
   const filter = useAppSelector((state)=> state.posts.filter)
   return (
      <div className="flex mb-6">
         <Input type="text"  placeholder="Filtrar por nombre" value={filter} onChange={(e) => dispatch(setFilter(e.target.value))}/>
      </div>
   )
}