import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import { useParams } from 'react-router-dom';

function EditPost() {
    const { posts, handleEditSubmit, handleDelete } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find((post) => post.id.toString() === id);

    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post]);

    if (!post) {
        return <h2>Post Not Found</h2>;
    }


    return (
        <>
            <h2>Edit Post</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleEditSubmit(post.id, editTitle, editBody);
            }}>
                <label htmlFor="postTitle">Title: </label>
                <input
                    type="text"
                    id="postTitle"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <br />
                <label htmlFor="postBody">Body: </label>
                <textarea
                    id="postBody"
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                ></textarea>
                <br />
                <button type="submit">Save</button>
                <button type="button" onClick={() => handleDelete(post.id)}>Delete</button>
            </form >
        </>
    );
}

export default EditPost;