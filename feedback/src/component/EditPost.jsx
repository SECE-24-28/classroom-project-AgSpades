import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { useParams } from 'react-router-dom';
function EditPost() {
    const { posts } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find((post) => post.id.toString() === id);
    if (!post) {
        return <h2>Post Not Found</h2>;
    }
    return (
        <>
            <h2>Edit Post</h2>
            <label htmlFor="postTitle"></label><input type="text" id={post.id} value={post.title} />
            <br />
            <label htmlFor="postBody"></label><textarea id="postBody" value={post.body}></textarea>
            <br />
            <button type="submit">Save</button>
        </>
    );
}

export default EditPost;