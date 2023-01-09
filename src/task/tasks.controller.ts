import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { GetTasksDto } from './dtos/get-tasks.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { TasksService } from './tasks.service';

@Controller('/api/v1/tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getTasks(@Query() query: GetTasksDto) {
        return this.tasksService.getTasks(query)
    }

    @Post()
    createNewTask(@Body() body: CreateTaskDto) {
        return this.tasksService.createNewTask(body)
    }

    @Get('/:id')
    getSingleTask(@Param('id') id: string) {
        return this.tasksService.getSingleTask(id)
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.deleteTask(id)
    }

    @Patch('/:id')
    updateTask(@Param('id') id: string, @Body() body: UpdateTaskDto) {
        return this.tasksService.updateTask(id, body)
    }
}
