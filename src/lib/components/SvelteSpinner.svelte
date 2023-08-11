<!--
  @component
  # SvelteSpinner

  A spinning svelte logo with spring physics and tamed behaviour using just-debounce-it
-->

<script lang="ts">
  import { getRandomNumber } from "$lib/modules/getRandomNumber"
  import { spring } from "svelte/motion"
  import debounce from "just-debounce-it"

  let position = 0

  const spinSpring = spring(
    { n: position },
    {
      stiffness: 0.05,
      damping: 0.075,
    },
  )

  const spinBy = () => {
    const value = getRandomNumber(900, -900)
    if (value >= 0 && value <= 72) {
      return 72
    } else if (value < 0 && value >= -72) {
      return -72
    } else {
      return value
    }
  }

  const spin = debounce(
    () => {
      spinSpring.set({ n: (position += spinBy()) })
    },
    90,
    true,
  )
</script>

<div class="mx-auto self-end 2xl:self-start">
  <button
    id="svelte-logo"
    aria-label="Svelte Spinner"
    class="h-32 w-32 rounded-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-svelte-500"
    on:mousemove={spin}
    on:click={spin}
  >
    <svg
      src="svelte"
      class="m-auto"
      height={128}
      width={128}
      style={`transform: rotate(${$spinSpring.n}deg)`}
    />
  </button>
</div>
