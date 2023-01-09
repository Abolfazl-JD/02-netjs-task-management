import { TaskStatus } from "../task.model"
import { IsEnum, IsOptional } from 'class-validator'

export class UpdateTaskDto{
    @IsOptional()
    title: string
    
    @IsOptional()
    description: string

    @IsEnum(TaskStatus)
    @IsOptional()
    status: TaskStatus
}