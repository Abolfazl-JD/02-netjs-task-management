import { TaskStatus } from "../task.model"
import { IsString, IsOptional, IsEnum } from 'class-validator'

export class GetTasksDto{
    @IsString()
    @IsOptional()
    search: string
    
    @IsEnum(TaskStatus)
    @IsOptional()
    status : TaskStatus
}