import React from 'react'

const Posts = ({ posts, loading }) => {

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    {post.id}
                    <div>
                        {post.title}
                    </div>
                </li>
            ))}

        </ul>
    )

}
export default Posts;