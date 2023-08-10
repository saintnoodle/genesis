<!--
  @component

  # BalancedParagraph
  
  A paragraph element with svelte-action-balancer preapplied.
  The default ratio is 0.85.
-->

<script lang="ts">
  import { balancer } from "svelte-action-balancer"

  let className = ""
  export { className as class }
  export let ratio = 0.85
</script>

<p
  use:balancer={{ ratio: ratio }}
  class="whitespace-pre-line {className}"
  {...$$restProps}
>
  <slot />
</p>
