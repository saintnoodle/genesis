<script lang="ts">
  import Counter from "$lib/components/Counter.svelte"
  import FeatureAccordion from "../lib/components/FeatureAccordion.svelte"
  import SvelteSpinner from "$lib/components/SvelteSpinner.svelte"
  import BalancedText from "$lib/components/BalancedText.svelte"
  import Anchor from "$lib/components/UI/Anchor.svelte"
  import { PUBLIC_TITLE } from "$env/static/public"
</script>

<div
  class="grid w-full animate-fade-in grid-cols-1 content-center justify-items-center gap-8 2xl:animate-landing 2xl:grid-cols-2 2xl:items-center 2xl:justify-items-stretch 2xl:gap-28"
>
  <div>
    <h1 class="mx-auto text-center text-6xl font-bold md:text-8xl 2xl:mt-0">
      {PUBLIC_TITLE || "Genesis"}
    </h1>
  </div>
  <div id="lead" class="max-w-[620px] text-center 2xl:max-w-full">
    <BalancedText
      id="subtitle"
      as="h2"
      class="mx-auto text-lg 2xl:p-0"
      ratio={1}
    >
      A <Anchor href="https://kit.svelte.dev/" class="text-svelte-500"
        >SvelteKit</Anchor
      > template pre-configured with TypeScript,
      <Anchor href="https://tailwindcss.com/">tailwindcss</Anchor>, and
      <Anchor href="https://prettier.io/">prettier</Anchor>.
    </BalancedText>
    <BalancedText class="mx-auto mt-2">
      A small collection of useful libraries and utilities are included and
      ready to go.
    </BalancedText>
  </div>

  <Counter />

  <FeatureAccordion />
  <SvelteSpinner />
</div>
