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

type VariantGroup =
  'Root element' |
  'Elementos de estructura' |
  'Text-level semantics' |
  'Elementos de lista' |
  'Elementos de formulario' |
  'Document sections' |
  'Elementos de interacción' |
  'Elementos de tabla' |
  'Elementos multimedia' |
  'Contenido incrustado' |
  'Elementos de texto' |
  'Elementos de enlace' |
  'Elementos de enfasis' |
  'Estilo y presentacion' |
  'Codigo y variable' |
  'Elementos de anotaciones' |
  'Elementos de direccion' |
  'Elementos de salto de linea'

