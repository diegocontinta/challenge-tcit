import { useAppDispatch } from "../store/hooks";
import { deletePost } from "../store/posts/poststhunks";
import { Post } from "../types/post";
import { Button } from "./ui/button";
import { TableCell } from "./ui/table";
import { TableRow } from "./ui/table";

interface Props {
    post: Post;
}

export default function PostItem({ post }: Props) {

    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deletePost(post.id));
    };

    return (
        <TableRow>
            <TableCell>{post.name}</TableCell>
            <TableCell>{post.description}</TableCell>
            <TableCell className="flex justify-end">
                <Button onClick={handleDelete} variant="destructive">Eliminar</Button>
            </TableCell>
        </TableRow>
    );
}