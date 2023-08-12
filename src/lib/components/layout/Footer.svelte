<script>
  import CloneCommand from "$lib/components/CloneCommand.svelte"
  import GithubButton from "../GithubButton.svelte"
</script>

<footer class="bottom-0 h-16 w-full overflow-hidden">
  <div
    class="flex h-full translate-y-16 animate-slide-in items-center justify-center border-t border-stone-200 px-8 dark:border-slate-800 lg:px-16 xl:justify-between"
    style="animation-delay: 250ms;"
  >
    <GithubButton />
    <CloneCommand class="hidden gap-2 xl:flex" />
  </div>
</footer>
