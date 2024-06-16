import Link from "next/link";

export default async function posts() {

  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json()
  return (
    <main className="pt-32 px-5 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-5"> All posts </h1>
      <ul>
        {
          data.posts.map((post) => {
            return (
              <li key={post.id} className="mb-3">
                <Link href={`posts/${post.id}`}> {post.title} </Link>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}