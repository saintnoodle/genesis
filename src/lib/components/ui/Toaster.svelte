<script lang="ts" context="module">
  import { createToaster, melt } from "@melt-ui/svelte"
  import { fly } from "svelte/transition"
  import { X } from "lucide-svelte"

  const {
    elements: { content, description, close },
    helpers,
    states: { toasts },
    actions: { portal },
  } = createToaster<string>()

  export const addToast = helpers.addToast
</script>

<div
  class="pointer-events-none fixed inset-0 z-50 flex flex-col items-center gap-2 p-4 lg:items-end lg:justify-end xl:bottom-16"
  use:portal
>
  {#each $toasts as { id, data } (id)}
    <div
      use:melt={$content(id)}
      in:fly={{ duration: 150, x: "100%" }}
      out:fly={{ duration: 150, x: "100%" }}
      class="pointer-events-auto rounded-lg bg-stone-200 shadow-md dark:bg-slate-800"
    >
      <div
        class="relative flex w-80 max-w-[calc(100vw-2rem)] items-center justify-between gap-4 p-4"
      >
        <div>
          <div use:melt={$description(id)}>
            {data}
          </div>
        </div>
        <button use:melt={$close(id)}>
          <X class="h-4 w-4" />
        </button>
      </div>
    </div>
  {/each}
</div>
