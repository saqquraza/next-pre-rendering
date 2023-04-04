import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Next Js pre-rendering</h1>
      <div>
        <Link legacyBehavior href="/users">
          <a>users</a>
        </Link>
      </div>
      <div>
        <Link legacyBehavior href="/posts">
          <a>List of Post</a>
        </Link>
      </div>
      <div>
        <Link legacyBehavior href="/comments">
          <a>Comments</a>
        </Link>
      </div>
    </>
  );
}
