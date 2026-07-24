import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { Card } from "./components/ui/card";

export default function App() {
        return (
                <main className="min-h-screen flex items-center justify-center p-6 bg-gray-50 flex-col gap-4"> 
                <div className="mx-auto w-full max-w-xl p-6">
                       <PostFilter/> 
                        <PostList/>
                        <PostForm />
                </div>
                </main>
        )
}