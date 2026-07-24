import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { createPost } from "../store/posts/poststhunks";

export default function PostForm() {
   const [form, setForm] = useState({name:"", description:""})
   const dispatch = useAppDispatch()
   const handleSubmit = async (e: React.SubmitEvent) => {
     
      e.preventDefault();

      if(!form.name.trim() || !form.description.trim()) {
         return
      }

      await dispatch(createPost({
         name: form.name,
         description: form.description
      })).unwrap()
      
      setForm({name:"", description:""})
   }

   return (
      <>
         <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="agregar titulo" value={form.name} onChange={(e) => setForm({...form, name: e.target.value })} /><br />
            <textarea name="" id="" value={form.description} onChange={(e) => setForm({...form, description: e.target.value })}></textarea><br />
            <button type="submit">Agregar</button>
         </form>
      </>
   )

}