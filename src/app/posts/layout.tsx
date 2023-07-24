import Link from "next/link";
import { use } from "react";

async function getPosts() {
  let posts = await fetch("https://dummyjson.com/posts?limit=3");
  return posts.json();
}

export default function Layout({ children }: any) {
  let posts = use(getPosts()).posts;
  console.log(posts, "hi");

  return (
    <div>
      <div className="flex flex-wrap gap-5 p-4">
        {posts.map((post: any, index: number) => (
          <div
            key={index}
            className="p-2 bg-slate-900 w-[30%] flex flex-col gap-5 justify-between"
          >
            <strong className="text-xl text-slate-300">{post.title}</strong>
            <Link href={`/posts/${post.id}`}>
              <button className="btn bg-blue-400 px-3 py-1">Read More</button>
            </Link>
          </div>
        ))}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
