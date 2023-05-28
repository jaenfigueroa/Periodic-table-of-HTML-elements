export type ItemHTML = {
  tag: string,
  group: VariantGroup,
  url: string,
  description: string
}

export type VariantGroup =
  'Root element' | /* VERDE CLARO */
  'Metadata and scripting' | /* AZUL */
  'Text-level semantics' | /* AMARILLO */
  'Grouping content' | /* NARANJA 1 */
  'Forms' | /* VERDE 2 */
  'Document sections' | /* AZUL 2 */
  'Interactive elements' | /* GRIS */
  'Tabular data' | /* NARANJA 2 */
  'Embedding content' /* MORADO */

