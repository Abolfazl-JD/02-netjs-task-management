import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { TaskStatus } from './task.model'

@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type : 'varchar', length : 30})
    title: string
    
    @Column({ type: 'varchar', length: 100 })
    description: string
    
    @Column({ enum : TaskStatus, default : TaskStatus.OPEN})
    status : string
}