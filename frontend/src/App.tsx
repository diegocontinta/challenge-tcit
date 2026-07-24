import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

export default function App() {
        return (
                <main> 
                       <h1>TCIT - POSTS</h1>
                       <PostList/>
                       <PostFilter/>
                       <PostForm />
                </main>
        )
}