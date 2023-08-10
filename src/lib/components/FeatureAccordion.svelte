<script lang="ts">
  import { createAccordion, melt } from "@melt-ui/svelte"
  import { slide } from "svelte/transition"
  import BalancedParagraph from "$lib/components/BalancedParagraph.svelte"

  const {
    elements: { content, item, trigger, root },
    helpers: { isSelected },
  } = createAccordion()

  const items = [
    {
      id: "melt-ui",
      title: "Melt UI",
      description:
        'If you like the React library "Radix UI", then you\'ll likely enjoy Melt UI as it follows the same concept. It features completely unstyled but fully functional and accessible components that help you focus more on the design and less on the code.',
      url: "https://www.melt-ui.com/docs/introduction",
    },
    {
      id: "svg-preprocessor",
      title: "@svelte-put/preprocess-inline-svg",
      description:
        "Put your SVGs in a directory, configure the plugin, then start using your SVGs inline. You can even assign attributes ahead of time in the config.",
      url: "https://svelte-put.vnphanquang.com/docs/preprocess-inline-svg",
    },
    {
      id: "balancer",
      title: "Svelte Action Balancer",
      description:
        'Svelte Action Balancer is heavily inspired by React Wrap Balancer. It "balances" your text by putting each line at roughly the same width.',
      url: "https://svelte-action-balancer.netlify.app",
    },
  ]
</script>

<div id="feature-accordion" class="w-full md:w-fit 2xl:h-64">
  <h3 class="mb-1 ml-2 text-xl font-semibold">What's included?</h3>
  <div
    use:melt={$root}
    {...$root}
    class="w-full rounded-lg border-2 border-stone-200 bg-stone-50 shadow-sm dark:border-slate-700 dark:bg-slate-800 md:w-[620px]"
  >
    {#each items as { id, title, description, url }, i}
      <div
        use:melt={$item({ value: id })}
        class="relative flex flex-col overflow-hidden first:rounded-t-lg last:rounded-b-lg focus-within:z-10 focus-within:ring focus-within:ring-svelte-500 focus-within:ring-opacity-60"
      >
        <button
          use:melt={$trigger({ value: id })}
          class="flex justify-between border-t px-4 py-2 text-start text-lg font-semibold transition-colors focus-visible:outline-none data-[state=open]:text-svelte-500 hocus:text-svelte-500 dark:border-slate-700 {i ===
          0
            ? 'border-t-0'
            : ''}"
        >
          {title}
        </button>
        {#if $isSelected(id)}
          <div
            use:melt={$content(id)}
            transition:slide
            class="overflow-hidden bg-white shadow-inner dark:bg-slate-900"
          >
            <BalancedParagraph class="px-4 py-2">
              {description}

              Explore {title}'s{" "}<a
                href={url}
                class="rounded underline transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-svelte-500 focus-visible:ring-opacity-60 hocus:text-svelte-700 dark:hocus:text-svelte-300"
              >
                documentation</a
              >.
            </BalancedParagraph>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
