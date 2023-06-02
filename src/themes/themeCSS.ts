import { createTheme } from '@uiw/codemirror-themes'
import { tags as t } from '@lezer/highlight'

export const themeCSS = createTheme({
  theme: 'light',
  settings: {
    background: '#fff',
    foreground: '#000',
    caret: '#5d00ff',
    selection: '#036dd626',
    selectionMatch: '#036dd626',
    lineHighlight: '#8a91991a',
    gutterBackground: '#fff',
    gutterForeground: '#000',
  },
  styles: [
    { tag: t.comment, color: '#a15314' },
    { tag: t.className, color: '#268c53' },
    { tag: t.tagName, color: '#da3460' },
    { tag: t.number, color: '#da3460' },
    { tag: t.keyword, color: '#881f96' },


    { tag: t.variableName, color: '#000' },
    { tag: [t.string, t.special(t.brace)], color: '#000' },
    { tag: t.bool, color: '#000' },
    { tag: t.null, color: '#000' },
    { tag: t.operator, color: '#000' },
    { tag: t.definition(t.typeName), color: '#000' },
    { tag: t.typeName, color: '#000' },
    { tag: t.angleBracket, color: '#000' },
    { tag: t.attributeName, color: '#000' },
  ],
})