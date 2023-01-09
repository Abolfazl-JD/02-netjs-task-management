import { DataSource } from "typeorm"
import { Task } from "./task/task.entity"
import { Task1665129120723 } from "../migrations/1665129120723-Task"


export default new DataSource({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'Lvrp1383',
    database: 'task_management',
    entities : [Task],
    synchronize: false,
    migrations: [Task1665129120723],   
})