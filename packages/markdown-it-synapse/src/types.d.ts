import MarkdownIt from 'markdown-it'

declare module 'markdown-it-testgen' {
  function generate(path: string, md: MarkdownIt): void
  export = generate
}
