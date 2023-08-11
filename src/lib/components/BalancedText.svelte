<!--
  @component
  # BalancedText
  A special element with svelte-action-balancer preapplied.
  @param `as` - Pass the element tag to render as. (default: "p")
  @param `ratio` - The ratio passed to the balancer. (default: 0.85)
-->

<script lang="ts">
  import { balancer } from "svelte-action-balancer"
  export let as: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "p"
  export let ratio = 0.85
</script>

<svelte:element this={as} use:balancer={{ ratio: ratio }} {...$$restProps}>
  <slot />
</svelte:element>
