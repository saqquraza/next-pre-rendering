import React from "react";
import Link from "next/link";
function Post({ posts }) {
  return (
    <div>
      Post
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link legacyBehavior href={`post/${post.id}`} passHref>
              <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <hr></hr>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Post;

export async function getStaticProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();
  return {
    props: {
      posts: data.slice(0, 5),
    },
  };
}
