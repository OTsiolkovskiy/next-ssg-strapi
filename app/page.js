import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Link from "next/link";

export async function fetchPosts() {
  const resulting = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs`
  );
  const data = await resulting.json();
  return data.data;
};

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
export const metadata = {
  title: 'Static Props Example',
  description: 'Demonstration of static props in Next.js'
}

export default async function Home() {

  const posts = await fetchPosts();

  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa', posts);

  return (
    <>
    <Head>
      <title>thisBlog</title>
      <meta title="description" content="This is an example of our blog" />
    </Head>
    <div className={styles.container}>
      <h1>Blog Post Links:</h1>
      <div className={styles.card}>
        {posts.map(post => {
          return (
            <div className={styles.flexing} key={post.id}>
              <Link href={`/blog/${post.id}`}>
                  <Image
                    src={`${post.imageUrl}`}
                    alt="blog-post"
                    priority={true}
                    className="rounded-full"
                    width={300}
                    height={300}
                  />
                  <h2>{post.title}</h2>
                  <div>
                    <p>{post.description}</p>
                  </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </>
  );
}

// export const dynamic = 'static';
