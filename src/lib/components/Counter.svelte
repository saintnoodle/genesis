<!--
  @component
  # Counter

  What demo isn't complete without a counter?
-->

<script lang="ts">
  const buttonClass =
    "flex h-6 w-6 select-none items-center justify-center rounded-lg px-2 pb-3 pt-1 text-3xl transition-colors hover:text-svelte-700 focus:ring focus:ring-svelte-500 focus:ring-opacity-60 focus-visible:outline-none dark:hover:text-svelte-300 md:text-4xl lg:text-7xl xl:h-12 xl:w-12"

  $: count = 0
  $: if (count === 1000) {
    count = 0
  } else if (count === -1) {
    count = 999
  }
</script>

<div class="flex w-full items-center justify-center gap-4 2xl:col-span-2">
  <button class={buttonClass} on:click={() => (count -= 1)}> - </button>
  <p
    class="w-24 select-none text-center text-4xl font-semibold md:w-36 md:text-6xl lg:w-72 lg:text-9xl"
  >
    {count}
  </p>
  <button class={buttonClass} on:click={() => (count += 1)}> + </button>
</div>
