import { use } from "react";

interface IParams {
  params: any;
  searchParams: any;
}

async function getPostById(id: number) {
  let post = await fetch(`https://dummyjson.com/post/${id}`);
  return post.json();
}
async function getUsertById(id: number) {
  let post = await fetch(`https://dummyjson.com/user/${id}`);
  return post.json();
}

export default function Page({ params }: IParams) {
  const { id } = params;
  const post = use(getPostById(id));
  const user = use(getUsertById(post.userId));
  console.log(user);
  console.log(post);
  return (
    <div className="flex flex-col gap-5">
      <div className="header w-fit flex flex-col gap-2">
        <h2 className="text-3xl font-bold">{post.title}</h2>
        <div className="w-full flex justify-between items-center">
          <small className="text-blue-200">
            {user.firstName + " " + user.lastName}
          </small>
          <div className="tags flex gap-2">
            {post.tags.map((tag: string, index: number) => (
              <span key={index} className="px-2 bg-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="md:max-w-[70%]">{post.body}</p>
    </div>
  );
}
