import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            // Optional: specify runtime version
            runtime: 'nodejs20.x',
            // Ensure proper output structure
            out: '.svelte-kit/vercel'
        }),
        csrf: {
            trustedOrigins: ['*']
        },
        // Ensure static assets are copied
        files: {
            assets: 'static'
        }
    },
    vitePlugin: {
        inspector: true
    }
}

export default config
