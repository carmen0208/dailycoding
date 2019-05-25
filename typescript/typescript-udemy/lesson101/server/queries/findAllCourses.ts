import { CourseModel } from "../model/model";

export function findAllCourses() {
  return CourseModel.findAll({
    order: ['seqNo']
  })
  .then(results => console.log(results))
}