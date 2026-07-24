import { useAppDispatch } from "../store/hooks";
import { deletePost } from "../store/posts/poststhunks";
import { Post } from "../types/post";

interface Props {
    post: Post;
}

export default function PostItem({ post }: Props) {

    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deletePost(post.id));
    };

    return (
        <li>
            {post.name}
            <button
                onClick={handleDelete}
            >
                Eliminar
            </button>
        </li>
    );
}