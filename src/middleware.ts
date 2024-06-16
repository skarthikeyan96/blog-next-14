import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export default function middleware(req: NextRequest){
    return withAuth(req);
}

// either this or do check separately in pages which you want to keep private
export const config = {
    matcher: ['/create-post']
}