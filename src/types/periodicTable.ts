export type Data = {
  title: string,
  elements: ItemHTML[],
  distribution: string[]
}

export type ItemHTML = {
  tag: string,
  group: VariantGroup,
  url: string,
  description: string
}

export type VariantGroup =
  'Root element' |
  'Metadata and scripting' |
  'Text-level semantics' |
  'Grouping content' |
  'Forms' |
  'Document sections' |
  'Interactive elements' |
  'Tabular data' |
  'Embedding content'

