import React from 'react';
import "./Post.css";

const Post = ({ posts, loading }) => {
    if (loading) {
        return <h2>7ot hena spinner</h2>
    }
    return (
        <div className="container">
            <ul className="postul">
                {posts.map(post => (
                    (post.id % 3 === 0) && (
                        <li key={post.id} className="postli">
                            <img
                                src={post.url}
                                alt={post.title}
                                style={{ width: "12rem" }}
                            />
                            <h4>{post.title}</h4>
                        </li>
                    )))}
            </ul>
            <ul className="postul">
                {posts.map(post => (
                    (post.id % 3 === 0) && (
                        <li key={post.id} className="postli">
                            <img
                                src={post.url}
                                alt={post.title}
                                style={{ width: "12rem" }}
                            />
                            <h4>{post.title}</h4>
                        </li>
                    )))}
            </ul>
            <ul className="postul">
                {posts.map(post => (
                    (post.id % 3 === 0) && (
                        <li key={post.id} className="postli">
                            <img
                                src={post.url}
                                alt={post.title}
                                style={{ width: "12rem" }}
                            />
                            <h4>{post.title}</h4>
                        </li>
                    )))}
            </ul>
        </div>
    )
}

export default Post;
