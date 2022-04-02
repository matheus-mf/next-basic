import {NextFetchEvent, NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    // Docs: https://nextjs.org/docs/middleware

    const url = req.nextUrl.clone()

    return NextResponse.redirect(url.origin);
}