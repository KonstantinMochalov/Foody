const getGeneric = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`)
    const data = await response.json()
    return data
    
}
	

export { getGeneric }