import * as ORM from "sequelize";

import {initCourseModel} from './initCourseModel'
const dbUrl = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course';

const sequelize = new ORM(dbUrl);

export const CourseModel = initCourseModel(sequelize)