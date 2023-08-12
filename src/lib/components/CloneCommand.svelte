<script lang="ts">
  import { copy } from "@svelte-put/copy"
  import { melt, createTooltip } from "@melt-ui/svelte"
  import type { FloatingConfig } from "@melt-ui/svelte/internal/actions"
  import { blur } from "svelte/transition"
  import { addToast } from "$lib/components/ui/Toaster.svelte"
  import Code from "./ui/Code.svelte"

  export let placement: FloatingConfig["placement"] = "top"
  const {
    elements: { trigger, content, arrow },
    states: { open },
  } = createTooltip({
    positioning: {
      placement: placement,
    },
    openDelay: 120,
    forceVisible: true,
  })

  let className: string = ""
  export { className as class }
</script>

<div class={className}>
  <p>Start your genesis.</p>
  <button
    use:copy
    on:click={() => addToast({ data: "Copied to clipboard" })}
    use:melt={$trigger}
    aria-label="Copy Command"
    class="rounded focus:ring focus:ring-svelte-500 focus-visible:outline-none"
    ><Code
      >git clone https://github.com/saintnoodle/genesis my-sveltekit-app</Code
    ></button
  >
</div>

{#if $open}
  <div
    use:melt={$content}
    transition:blur={{ duration: 120 }}
    class="z-20 rounded-lg bg-stone-100 px-3 py-2 shadow dark:bg-slate-800"
  >
    <div use:melt={$arrow} />
    <p>Click to copy to clipboard</p>
  </div>
{/if}
