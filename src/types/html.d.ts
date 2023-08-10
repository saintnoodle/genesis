declare namespace svelteHTML {
  interface SVGAttributes {
    /**
     * Defines the source of an SVG. Use this for inlining SVGs with [@svelte-put/preprocess-inline-svg](https://svelte-put.vnphanquang.com/docs/preprocess-inline-svg).
     */
    src?: import("@svelte-put/inline-svg/preprocess").Source
  }
}
