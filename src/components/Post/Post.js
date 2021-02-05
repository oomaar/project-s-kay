import React from 'react';
import "./Post.css";

const Post = ({ posts, loading }) => {
    if (loading) {
        return <h2>7ot hena spinner</h2>
    }
    return (
        <div class="col-xs-12 col-sm-6 col-md-4">
            <div className="container">
                <ul className="postul">
                    {posts.map(post => (
                        <li key={post.id} className="postli">
                            <img
                                src={post.url}
                                alt={post.title}

                            />
                            <h4>{post.title}</h4>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Post;
