import prisma from "@/lib/db";
import Link from "next/link";
import { Suspense } from "react";

export default async function posts() {
  
  // const response = await fetch("https://dummyjson.com/posts?limit=10");
  // const data = await response.json()
  const posts = await prisma.post.findMany()

  return (
    <main className="pt-32 px-5 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-5"> All posts </h1>
      <Suspense fallback="Loading...">
      <ul>
        {
          posts.map((post) => {
            return (
              <li key={post.id} className="mb-3">
                <Link href={`posts/${post.id}`}> {post.title} </Link>
              </li>
            )
          })
        }
      </ul>
      </Suspense>
    </main>
  )
}