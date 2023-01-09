import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid'
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { GetTasksDto } from './dtos/get-tasks.dto';
import { Repository, Like } from 'typeorm';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = []

    constructor(@InjectRepository(Task) private tasksRepository : Repository<Task>){}
    
    getTasks(filters : GetTasksDto) {
        const search = filters.search || ''
        const status = filters.status || ''

        // let resultTasks = this.tasks
        // if (status) resultTasks = resultTasks.filter(t => t.status === status)
        // if (search) resultTasks = resultTasks.filter(t => t.title.toLowerCase().includes(search) || t.description.toLowerCase().includes(search))
        console.log(search, status)
        return this.tasksRepository.findBy([
            { title: Like(`%${search}%`), status: Like(`%${status}%`) },
            { description : Like(`%${search}%`), status : Like(`%${status}%`) }
        ])
    }

    createNewTask(taskInfo: CreateTaskDto) {
        return this.tasksRepository.save(taskInfo)
    }

    async getSingleTask(taskId: string) {
        const task = await this.tasksRepository.findOneBy({ id : +taskId })
        if(!task) throw new NotFoundException('unable to find this task')
        return task
    }

    async deleteTask(taskId: string) {
        const task = await this.tasksRepository.findOneBy({ id: +taskId })
        this.tasksRepository.remove(task)
    }

    async updateTask(taskId: string, taskInfo: UpdateTaskDto) {
        const task = await this.getSingleTask(taskId)
        return this.tasksRepository.save({...task, ...taskInfo})
    }
}
