const BASEURL = "https://strangers-things.herokuapp.com"
const COHORT = "/api/2202-FTB-ET-WEB-FT"

export const getAllPosts = async () => {
 try {
     const response = await fetch(`${BASEURL}${COHORT}/posts`)
     const data = await response.json()
     console.log(data)
 } catch (error) {
     console.error(error)
 }
}