export type Data = {
  title: string,
  elements: ItemHTML[],
  distribution: string[]
}

export type ItemHTML = {
  id: number
  tag: string,
  group: VariantGroup,
  url: string,
  description: string
}

type VariantGroup =
  'Root element' |
  'Metadata and scripting' |
  'Text-level semantics' |
  'Grouping content' |
  'Forms' |
  'Document sections' |
  'Interactive elements' |
  'Tabular data' |
  'Embedding content'

