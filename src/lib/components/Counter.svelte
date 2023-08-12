<!--
  @component
  # Counter

  What demo isn't complete without a counter?
-->

<script lang="ts">
  import { count } from "$lib/stores/count"
  import { createTooltip, melt } from "@melt-ui/svelte"
  import { blur } from "svelte/transition"
  import CounterButton from "./CounterButton.svelte"

  const {
    elements: { trigger, content, arrow },
    states: { open },
  } = createTooltip({
    positioning: {
      placement: "top",
    },
    openDelay: 120,
    forceVisible: true,
  })

  $: if ($count === 1000) {
    count.set(0)
  } else if ($count === -1) {
    count.set(999)
  }
</script>

<div
  class="relative flex w-full items-center justify-center gap-4 2xl:col-span-2"
>
  <CounterButton decrement />
  <button
    class="w-24 touch-manipulation select-none rounded-lg text-center text-5xl font-semibold focus-visible:ring focus-visible:ring-svelte-500 focus-visible:ring-opacity-60 focus-visible:outline-none lg:w-72 lg:text-9xl"
    aria-label="Reset Counter"
    on:click={() => count.set(0)}
    use:melt={$trigger}
  >
    {$count}
  </button>
  <CounterButton />
</div>

{#if $open && $count !== 0}
  <div
    use:melt={$content}
    transition:blur={{ duration: 120 }}
    class="z-20 rounded-lg bg-stone-100 px-3 py-2 shadow dark:bg-slate-800"
  >
    <div use:melt={$arrow} />
    <p>Click to reset the count</p>
  </div>
{/if}
