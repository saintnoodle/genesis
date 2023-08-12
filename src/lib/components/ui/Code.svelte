<script lang="ts">
  let className: string = ""
  export { className as class }
</script>

<code
  class="rounded bg-stone-200 px-2 py-1 text-base dark:bg-slate-800 {className}"
  {...$$restProps}
>
  <slot />
</code>
