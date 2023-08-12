# Genesis

This is a template that comes out of the box with prettier and Tailwind CSS pre-configured and working out of the box.

### Getting Started
All you need to do to get started is clone this repository 

```
git clone https://github.com/saintnoodle/genesis my-sveltekit-app
```
Once complete, run `pnpm i` to install, then `pnpm dev` to start a Vite environment. 
Now you are ready to start building your new app SvelteKit app with TailwindCSS!

If you are unfamiliar with Svelte, their [interactive tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) will show you the ropes.

### Deployment
For info on building and deploying your app, visit [this section](https://kit.svelte.dev/docs/building-your-app) of the SvelteKit docs. 
Out of the box, adapter-auto automatically installs the correct adapter for the following options:
- Cloudflare Pages
- Vercel
- Netlify
- Azure SWA
- AWS with STT

More information about the adapters are availble in the [SvelteKit docs](https://kit.svelte.dev/docs/adapters).

# Features

### UI

- [Tailwind CSS](https://tailwindcss.com/) - A utility first CSS framework for blazing fast development
- [PostCSS](https://postcss.org/) - Where there's Tailwind, there's PostCSS. If you want to use custom styles or drop Tailwind entirely, add a style block with `lang="postcss"` to your svelte component to write PostCSS syntax and use PostCSS plugins.
- [Melt UI](https://www.melt-ui.com) - A collection of component builders to help create accessible and functional user interfaces
- [Fontsource](https://fontsource.org/) - A collection of fonts as NPM packages to make self-hosting fonts easy. This template uses the popular typeface Inter.
- [Lucide](https://lucide.dev/) - A growing collection of clean and simple icons
- [Svelte Action Balancer](https://svelte-action-balancer.netlify.app/) - Makes your headings and paragraphs more readable

### Utilities

- [@svelte-put](https://svelte-put.vnphanquang.com/) - A couple utilities are used from this collection
- [just-debounce-it](https://github.com/angus-c/just#just-debounce-it) - A debouncer. That's it. 
- [svelte-sequential-preprocessor](https://github.com/pchynoweth/svelte-sequential-preprocessor) - Loads preprocessor plugins sequentially

### Code Quality

- [TypeScript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/) - An opinionated code formatter for consistency. use with `pnpm format`
- [prettier-plugin-svelte](https://github.com/sveltejs/prettier-plugin-svelte) - Svelte's VSCode plugin uses prettier with this baked in, but I want CLI checking and additional plugins.
- [prettier-plugin-tailwind](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) - A plugin that orders your utility classes with Prettier
- [Svelte Check](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check) - Type, A11y, and unused CSS checking with a CLI. `pnpm check` or `pnpm check:watch`
