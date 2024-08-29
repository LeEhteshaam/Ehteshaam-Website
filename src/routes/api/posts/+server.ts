import { json } from "@sveltejs/kit";
import type { Post } from '$lib/types';

export const prerender = true

async function getPosts() {
    let posts: Post[] = [];
    const paths = import.meta.glob('/src/posts/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path] as { metadata: Omit<Post, 'slug'> };  // Explicitly cast file
        const slug = path.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata;
            const post: Post = { ...metadata, slug };  // Combine metadata and slug into a Post object
            if (post.published) {
                posts.push(post);
            }
        }
    }   

    posts = posts.sort((first, second) => {
        return new Date(second.date).getTime() - new Date(first.date).getTime();
    });

    return posts;
}

export async function GET() {
    const posts = await getPosts();
    return json(posts);
}
