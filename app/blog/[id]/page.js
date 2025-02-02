import { notFound } from "next/navigation";
import Image from "next/image";
import { fetchPosts } from "@/app/page";

export async function generateMetadata({ params }) {
  const posts = await fetchPosts();
  const post = posts.find((p) => p.id.toString() === params.id);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }) {
  const posts = await fetchPosts();
  
  const post = posts.find((p) => p.id.toString() === params.id);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <Image src={post.imageUrl} alt={post.title} width={800} height={600} />
      <p>{post.description}</p>
    </div>
  );
}
