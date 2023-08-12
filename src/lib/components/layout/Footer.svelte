<script>
  import CloneCommand from "$lib/components/CloneCommand.svelte"
  import GithubButton from "../GithubButton.svelte"
</script>

<footer
  class="bottom-0 flex h-16 w-full items-center justify-center border-t border-stone-200 px-8 dark:border-slate-800 lg:px-16 xl:justify-between"
>
  <GithubButton />
  <CloneCommand class="hidden gap-2 xl:flex" />
</footer>
