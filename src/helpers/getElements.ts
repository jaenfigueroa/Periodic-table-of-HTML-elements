export const getElements = async () => {
  const URL = 'https://raw.githubusercontent.com/jaenfigueroa/Periodic-table-of-HTML-elements/main/public/data/elements.json'

  try {
    const response = await fetch(URL)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

