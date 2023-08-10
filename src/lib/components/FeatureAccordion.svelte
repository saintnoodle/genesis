<!--
  @component
  
  # FeatureAccordion

  An accordion using MeltUI listing and explaining everything installed with this template
-->

<script lang="ts">
  import { createAccordion, melt } from "@melt-ui/svelte"
  import { slide } from "svelte/transition"
  import BalancedParagraph from "$lib/components/BalancedParagraph.svelte"
  import { items } from "$lib/consts/FeatureAccordionItems"
  import { expoOut } from "svelte/easing"

  const {
    elements: { content, item, trigger, root },
    helpers: { isSelected },
  } = createAccordion()
</script>

<div id="feature-accordion" class="w-full md:w-fit 2xl:h-64">
  <h1 class="mb-1 ml-2 text-xl font-semibold">What's included?</h1>
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
            transition:slide={{duration: 120, easing: expoOut}}
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
