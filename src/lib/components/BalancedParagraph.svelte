<script lang="ts">
  import { balancer } from "svelte-action-balancer"

  let className = ""
  export { className as class }
</script>

<p
  use:balancer={{ ratio: 0.85 }}
  class="whitespace-pre-line {className}"
  {...$$restProps}
>
  <slot />
</p>
