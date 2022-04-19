//accepst searchParams state as an argument, returns a comlited search string for api

interface Params {
	country: string
	meal: string
	diet: string
	restrictions: string[]
}

const getSearchString = (searchParams:Params) => {
    const amount = 9
    let searchString: string = ""
    const cridentials = `?apiKey=${process.env.REACT_APP_API_KEY}`
    if (searchParams.country === "any") {
        searchString = "random"+cridentials
    } else {
        searchString="complexSearch" + cridentials + `&cuisine=${searchParams.country}`
        if (searchParams.meal!=="any") searchString += `&type=${searchParams.meal}`
        if (searchParams.diet!=="any") searchString += `&diet=${searchParams.diet}`
        if (searchParams.restrictions.length !== 0) {
            searchString += `&restrictions=`+ searchParams.restrictions.join()
        }
    }
    // console.log();
    
    return searchString +`&number=${amount}`
    
}
	

export { getSearchString }