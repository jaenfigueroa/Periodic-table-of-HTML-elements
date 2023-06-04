import { createTheme } from '@uiw/codemirror-themes'
import { tags as t } from '@lezer/highlight'

export const themeJS = createTheme({
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
    { tag: t.keyword, color: '#881f96' },
    { tag: t.variableName, color: '#3c27c4' },
    { tag: t.bool, color: '#221199' },
    { tag: [t.string, t.special(t.brace)], color: '#aa1111' },
    { tag: t.propertyName, color: '#00aa1a' },
    { tag: t.number, color: '#367e61' },
    { tag: t.null, color: '#f0f' },
  ],
})