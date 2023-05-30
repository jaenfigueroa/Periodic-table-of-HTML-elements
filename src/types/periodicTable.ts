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
  'Elemento root' |
  'Elems. de estructura' |
  'Text-level semantics' |
  'Elems. de lista' |
  'Elems. de lista de definiciones' |
  'Elems. de formulario' |
  'Elems. para secciones' |
  'Elems. de interacción' |
  'Elems. de tabla' |
  'Elems. multimedia' |
  'Elems. de contenido incrustado' |
  'Elems. de texto' |
  'Elems. de enlace' |
  'Elems. de enfasis' |
  'Elems. de estilo' |
  'Elems. de codigo y variable' |
  'Elems. para anotaciones ruby' |
  'Elems. de direccion' |
  'Elems. de salto de linea' |
  'Elems. para MathML'

