export type ItemHTML = {
  tag: string,
  group: VariantGroup,
  url: string,
  description: string
}

export type VariantGroup =
  'Root element' |
  'Metadata and scripting' |
  'Embedding content' |
  'Text-level semantics' |
  'Grouping content' |
  'Forms' |
  'Document sections' |
  'Tabular data' |
  'Interactive elements'
