<script lang="ts">
  import { count } from "$lib/stores/count"
  import { Plus, Minus } from "lucide-svelte"

  export let decrement = false

  const conditionalCount = (n: number) => {
    if (decrement) {
      return n - 1
    }
    return n + 1
  }
</script>

<button
  aria-label={decrement ? "Decrement Counter" : "Increment Counter"}
  class="flex h-8 w-8 touch-manipulation select-none items-center justify-center rounded-lg p-1 transition-colors hover:text-svelte-700 focus-visible:outline-none focus-visible:ring focus-visible:ring-svelte-500 focus-visible:ring-opacity-60 dark:hover:text-svelte-300 lg:h-12 lg:w-12"
  on:click={() => count.update((n) => conditionalCount(n))}
>
  {#if decrement}
    <Minus size={48} />
  {:else}
    <Plus size={48} />
  {/if}
</button>
