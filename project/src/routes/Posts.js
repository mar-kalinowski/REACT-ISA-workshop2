import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Posts = () => {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        fetch('localhost:3000/posts')
        .then(r => r.json())
        .then(posts => setPosts(posts));
    }, []);

    const renderPosts = () => posts.map(post => {
        const postURL = `/post/${post.id}`;

        return (
            <div>
                <Link to={postURL} key={post.id}>{post.title}</Link>
            </div>
        )
    });

    return (
        <div>
            <h1>Lista postów</h1>
            {renderPosts()}
        </div>
    )
}


