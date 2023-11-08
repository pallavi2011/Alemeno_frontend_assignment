import axios from 'axios'

const API_URL = 'http://localhost:3030/courses'

// Create new goal
const getAllCourses = async () => {
 
  const response = await axios.get(API_URL)

  return response.json()
}

const courseService = {
    getAllCourses
  }
  
  export default courseService
