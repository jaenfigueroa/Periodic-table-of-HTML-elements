export const getElements = async () => {
  try {
    const response = await fetch('../../data/elements.json')
    const elements = await response.json()
    return elements
  } catch (error) {
    console.log(error)
  }
}