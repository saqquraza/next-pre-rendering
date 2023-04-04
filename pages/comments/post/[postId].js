import React from "react";
import { useRouter } from "next/router";

function PostID({ postData }) {
  const router=useRouter()

  if(router.isFallback){
    return <h2>loading..</h2>
  }

  return (
    <div>
      <h2>Post: </h2>
            <h3 key={postData.id}>
              {postData.title}
            </h3>

    </div>
  );
}
export default PostID;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
      {
        params: { postId: "4" },
      },
      {
        params: { postId: "5" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  // console.log(context)
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await resp.json();
  // console.log(data);
  return {
    props: {
      postData: data,
    },
  };
}
