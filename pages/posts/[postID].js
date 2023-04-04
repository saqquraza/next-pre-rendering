import { useRouter } from "next/router";

function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Post be :</h2>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
}
export default Post;

export async function getStaticPaths() {
  //   const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await resp.json();
  //   const paths = data.map((post) => {
  //     return {
  //       params: {
  //         postID: `${post.id}`,
  //       },
  //     };
  //   });

  return {
    paths: [
      {
        params: { postID: "1" },
      },
      {
        params: { postID: "2" },
      },
      {
        params: { postID: "3" },
      },
      {
        params: { postID: "4" },
      },
    ],
    // paths,
    // fallback: false,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // console.log(context)
  const { params } = context;
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  );

  const data = await resp.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  console.log(`generating a Page /posts/${params.postID}`);
  return {
    props: {
      post: data,
    },
  };
}
