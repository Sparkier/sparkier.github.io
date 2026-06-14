sed -i 's/export function getBlogEntries() {/export const blogEntries = [/' src/lib/helpers/blogProvider.ts
sed -i 's/let cachedBlogEntries: BlogEntry\[\] | null = null;//' src/lib/helpers/blogProvider.ts
sed -i 's/if (cachedBlogEntries) return cachedBlogEntries;//' src/lib/helpers/blogProvider.ts
sed -i 's/const entries = \[//' src/lib/helpers/blogProvider.ts
sed -i 's/cachedBlogEntries = entries;//' src/lib/helpers/blogProvider.ts
sed -i 's/return entries;//' src/lib/helpers/blogProvider.ts
