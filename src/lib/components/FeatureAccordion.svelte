<!--
  @component
  # FeatureAccordion

  An accordion using MeltUI listing and explaining everything installed with this template
-->

<script lang="ts">
  import { createAccordion, melt } from "@melt-ui/svelte"
  import { slide } from "svelte/transition"
  import BalancedText from "$lib/components/ui/BalancedText.svelte"
  import { items } from "$lib/consts/FeatureAccordionItems"
  import { expoOut } from "svelte/easing"
  import Anchor from "./ui/Anchor.svelte"

  const {
    elements: { content, item, trigger, root },
    helpers: { isSelected },
  } = createAccordion()
</script>

<div id="feature-accordion" class="flex w-full flex-col items-center 2xl:h-64">
  <div class="w-full max-w-[620px]">
    <h1 class="mb-1 ml-2 text-xl font-semibold">What's included?</h1>
    <div
      use:melt={$root}
      {...$root}
      class="rounded-lg border-2 border-stone-200 bg-stone-50 shadow-sm dark:border-slate-700 dark:bg-slate-800"
    >
      {#each items as { id, title, description, url }, i}
        <div
          use:melt={$item({ value: id })}
          class="relative flex flex-col overflow-hidden first:rounded-t-lg last:rounded-b-lg [&:has(:focus-visible)]:z-10 [&:has(:focus-visible)]:ring [&:has(:focus-visible)]:ring-svelte-500 [&:has(:focus-visible)]:ring-opacity-60"
        >
          <button
            use:melt={$trigger({ value: id })}
            class="flex justify-between border-t px-4 py-2 text-start font-semibold transition-colors hover:text-svelte-500 focus-visible:text-svelte-500 focus-visible:outline-none data-[state=open]:text-svelte-500 dark:border-slate-700 {i ===
            0
              ? 'border-t-0'
              : ''}"
          >
            {title}
          </button>
          {#if $isSelected(id)}
            <div
              use:melt={$content(id)}
              transition:slide={{ duration: 120, easing: expoOut }}
              class="overflow-hidden bg-white text-sm shadow-inner dark:bg-slate-900"
            >
              <BalancedText class="whitespace-pre-line px-4 py-2">
                {description}

                Explore {title}'s{" "}<Anchor href={url}>documentation</Anchor>.
              </BalancedText>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
