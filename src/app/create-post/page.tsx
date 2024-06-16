import { createPost } from "@/actions/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const CreatePost = async () => {

    const {isAuthenticated} = getKindeServerSession();

    if(!await isAuthenticated()) {
        redirect('/api/auth/login?post_login_redirect_url=/create-post')
    }
    return (
        <main className="text-center pt-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-5"> Create post </h1>
            <form action={createPost} className="h-10 space-x-2 mt-10">
                <input type="text" name="title" placeholder="title for new post" required className="border rounded px-3 h-full" />
                <button className="h-full bg-blue-500 px-5 rounded text-white"> Submit </button>
            </form>
        </main>
    )
}

export default CreatePost;