<script>
  import "@fontsource-variable/inter"
  import "../app.postcss"
  import { PUBLIC_TITLE } from "$env/static/public"
  import Footer from "$lib/components/layout/Footer.svelte"
  import Toaster from "$lib/components/ui/Toaster.svelte"
</script>

<svelte:head>
  <title>{PUBLIC_TITLE || "Genesis"}</title>
  <meta
    name="description"
    content="A template for SvelteKit providing TypeScript, code formatting, and styling out-of-the-box."
  />
  <meta
    name="theme-color"
    media="(prefers-color-scheme: dark)"
    content="#020617"
  />
  <meta
    name="theme-color"
    media="(prefers-color-scheme: light)"
    content="#ff3e00"
  />
</svelte:head>

<main class="mx-2 flex grow overflow-hidden">
  <slot />
</main>

<Footer />

<Toaster />
