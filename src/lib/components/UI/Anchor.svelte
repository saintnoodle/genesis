<script lang="ts">
  let className: string | undefined = undefined
  export { className as class }
  export let href: string
</script>

<a
  class="rounded underline transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-svelte-500 focus-visible:ring-opacity-60 hocus:text-svelte-700 dark:hocus:text-svelte-300 {className}"
  {href}
  {...$$restProps}
>
  <slot />
</a>
