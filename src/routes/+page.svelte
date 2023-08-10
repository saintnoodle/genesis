<script lang="ts">
  import Counter from "$lib/components/Counter.svelte"
  import FeatureAccordion from "../lib/components/FeatureAccordion.svelte"
  import SvelteSpinner from "$lib/components/SvelteSpinner.svelte"
  import { balancer } from "svelte-action-balancer"

  const hoverClass =
    "transition-colors hocus:text-svelte-700 dark:hocus:text-svelte-300"
  const focusClass =
    "focus-visible:outline-none focus-visible:ring focus-visible:ring-svelte-500 focus-visible:ring-opacity-60"
</script>

<div class="container flex min-h-screen items-center justify-center">
  <div
    class="grid w-full grid-cols-1 content-center justify-items-center gap-8 2xl:grid-cols-2 2xl:items-center 2xl:justify-items-stretch 2xl:gap-32"
  >
    <h1
      use:balancer={{ ratio: 0.85 }}
      class="mt-8 text-center mx-auto text-2xl font-bold md:text-5xl lg:text-6xl 2xl:mt-0"
    >
      Unnamed
      <a
        class="rounded-lg p-1 text-svelte-500 {hoverClass} {focusClass}"
        href="https://kit.svelte.dev/docs/introduction"
      >
        SvelteKit
      </a>
      Template
    </h1>
    <p use:balancer={{ ratio: 0.85 }} class="text-center lg:text-lg">
      This template is pre-configured with TypeScript,
      <a
        href="https://tailwindcss.com/"
        class="rounded underline {hoverClass} {focusClass}"
      >
        tailwindcss</a
      >, and
      <a
        href="https://prettier.io/"
        class="rounded underline {hoverClass} {focusClass}"
      >
        prettier</a
      >.
      <br />
      A handful of useful libraries are included to kickstart and speed up development
    </p>

    <Counter />

    <FeatureAccordion />
    <SvelteSpinner />
  </div>
</div>
