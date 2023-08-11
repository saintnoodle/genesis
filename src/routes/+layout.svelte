<script>
  import "@fontsource-variable/inter"
  import "../app.postcss"
  import { PUBLIC_TITLE } from "$env/static/public"
</script>

<svelte:head>
  <title>{ PUBLIC_TITLE || "Genesis"}</title>
  <meta
    name="description"
    content="A template for SvelteKit providing TypeScript, code formatting, and styling out-of-the-box."
  />
  <meta name="theme-color" content="#ff3e00" />
</svelte:head>

<main class="flex mx-2 min-h-screen items-center justify-center">
  <slot />
</main>
