export type ItemHTML = {
  tag: string,
  group: VariantGroup,
  url: string,
  description: string
}

export type VariantGroup =
  'Root element' | /* VERDE CLARO */
  'Text-level semantics' | /* AMARILLO */
  'Forms' | /* VERDE */
  'Tabular data' | /* NARANJA 2 */
  'Metadata and scripting' | /* BLUE */
  'Grouping content' | /* NARANJA 1 */
  'Document sections' | /* AZUL 2 */
  'Interactive elements' | /* GRIS */
  'Embedding content' /* MORADO */

