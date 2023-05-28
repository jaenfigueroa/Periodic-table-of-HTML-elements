export const getElements = () => {
  return fetch('../../data/elements.json')
    .then(response => response.json())
    .then(elements => elements)
}