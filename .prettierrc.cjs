module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: false,
  plugins: [
    "prettier-plugin-svelte",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
  ],
  pluginSearchDirs: false,
  tailwindConfig: './tailwind.config.ts',
}
