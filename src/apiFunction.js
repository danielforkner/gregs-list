const BASEURL = "https://strangers-things.herokuapp.com"
const COHORT = "/api/2202-FTB-ET-WEB-FT"

export const getAllPosts = async (setAllPosts) => {
 try {
     const response = await fetch(`${BASEURL}${COHORT}/posts`)
     const data = await response.json()
   setAllPosts(data.data.posts)
     if(response.error) throw response.error 
   
} catch (error) {
     console.error(error)
 }
}