"use server"

// for server actions , js code runs on the server 

export async function createPost (formData: FormData) {
    const title = formData.get('title')
}