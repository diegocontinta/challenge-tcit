import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { createPost } from "../store/posts/poststhunks";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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
      <Card className="align-center p-6 mt-6">
         <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
         <Label>Agregar nombre</Label>
            <Input type="text" placeholder="Título" value={form.name} onChange={(e) => setForm({...form, name: e.target.value })}  />
            <Label>Agregar descripción</Label>
            <Textarea name="" id="" value={form.description} onChange={(e) => setForm({...form, description: e.target.value })} placeholder="Descripción"></Textarea>
            <Button type="submit" className="mt-2 flex ml-auto">Agregar</Button>
         </form>
      </Card>
   )

}