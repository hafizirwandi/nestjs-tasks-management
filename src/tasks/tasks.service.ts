import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import {v1 as uuid} from 'uuid';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    create(title: string, description: string) {
        const task: Task = {
            id: uuid(),
            title: title,
            description: description,
            status: TaskStatus.OPEN
        };
        this.tasks.push(task);
        return task;
    }
    findAll(): Task[] {
        return this.tasks;
    }
}
