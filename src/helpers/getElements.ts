export const getElements = async () => {
  const URL = 'public/data/elements.json'

  try {
    const response = await fetch(URL)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

