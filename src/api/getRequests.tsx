interface Params {
	country: string
	meal: string
	diet: string
	restrictions: string[]
}
const getRecipes = (searchParams:Params) => {
    const amount = 10
    let searchString: string = ""
    const cridentials = `?apiKey=${process.env.REACT_APP_API_KEY}`
    if (searchParams.country === "any") {
        searchString = "random"+cridentials+`&number=${amount}`
    } else {
        searchString="complexSearch" + cridentials + `&cusine=${searchParams.country}`
        console.log(1);
        if (searchParams.meal!=="any") searchString += `$type=${searchParams.meal}`
        if (searchParams.diet!=="any") searchString += `$diet=${searchParams.diet}`
        if (searchParams.restrictions.length !== 0) {
            searchString += `$restrictions=`
            searchParams.restrictions.forEach((element, index) => {
                if (index) searchString += "," 
                if (element==="treenut") searchString += "tree+nut"
                else searchString += element
            });
        }
    }
    
    // const response = await fetch(`https://api.spoonacular.com/recipes/${searchString}`)
    // const data = await response.json()
    return searchString
    
}
	

export { getRecipes }