export const getElements = async () => {
  // const URL = '/data/elements.json'
  const URL = 'https://raw.githubusercontent.com/jaenfigueroa/Periodic-table-of-HTML-elements/main/data/elements.json'

  try {
    const response = await fetch(URL)
    const elements = await response.json()
    return elements
  } catch (error) {
    console.log(error)
  }
}

