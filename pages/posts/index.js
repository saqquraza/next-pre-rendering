import Post from "@/components/post";
import React from "react";
import Link from 'next/link'

function PostList({ posts }) {
  return (
    <div>
      <h2>PostList</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link legacyBehavior href={`/posts/${post.id}`} passHref>
                <div>
                     <Post post={post} />
                </div>
             
            </Link>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;

export async function getStaticProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();
  console.log("Generate at Static time")
  return {
    props: {
      posts: data.slice(0, 4),
      // posts:data
    },
  };
}
