
import { findAllCourses } from './queries/findAllCourses'

findAllCourses().then(results => console.log(results))
console.log('Server is running')
