import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const Post = async ({ params }: {
    params: { id: string }
}) => {

    const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })
    
    if(!post){
        notFound()
    }
    return (
        <main className="pt-24 px-7 text-center">
            <Suspense fallback="Loading...">
                <h1 className="text-5xl font-semibold mb-7"> {post.title} </h1>
                <p className="max-w-[700px] mx-auto"> {post.body} </p>
            </Suspense>
        </main>

    )
}

export default Post;