export type MarkdownEditorCommandData = {
  openSyntax: string
  closeSyntax: string
}

export const commandList = [
  'title',
  'bold',
  'italic',
  'strikethrough',
  'code',
  'latex',
  'subscript',
  'superscript',
  'link',
  'image',
] as const

export type CommandListType = (typeof commandList)[number]
export type MarkdownEditorCommands = Record<
  CommandListType,
  MarkdownEditorCommandData
>

export const MARKDOWN_COMMANDS_DATA: MarkdownEditorCommands = {
  title: {
    openSyntax: '###',
    closeSyntax: '',
  },
  bold: {
    openSyntax: '**',
    closeSyntax: '**',
  },
  italic: {
    openSyntax: '_',
    closeSyntax: '_',
  },
  strikethrough: {
    openSyntax: '--',
    closeSyntax: '--',
  },
  code: {
    openSyntax: '```',
    closeSyntax: '```',
  },
  latex: {
    openSyntax: '$$\\(',
    closeSyntax: '\\)$$',
  },
  subscript: {
    openSyntax: '~',
    closeSyntax: '~',
  },
  superscript: {
    openSyntax: '^',
    closeSyntax: '^',
  },
  link: {
    openSyntax: '[',
    closeSyntax: '](url)',
  },
  image: {
    openSyntax: '![',
    closeSyntax: '](image-url)',
  },
}
