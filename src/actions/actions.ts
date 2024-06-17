"use server"

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

// for server actions , js code runs on the server 

export async function createPost (formData: FormData) {
    const title = formData.get('title') as string;
    const body = formData.get('body') as string;

    await prisma.post.create({
        data:{
            title,
            body
        }
    })

    revalidatePath('/posts')
}