import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setFilter } from "../store/posts/postsSlice"

export default function PostFilter() {

   const dispatch = useAppDispatch();
   const filter = useAppSelector((state)=> state.posts.filter)
   return (
      <>
        <input type="text"  placeholder="Filtrar por nombre" value={filter} onChange={(e) => dispatch(setFilter(e.target.value))}/>
      </>
   )
}