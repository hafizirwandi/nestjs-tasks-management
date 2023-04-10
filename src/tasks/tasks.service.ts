import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import {v1 as uuid} from 'uuid';
import { CreateTask } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    create(createTask: CreateTask) {
        const { title, description } = createTask
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
    find(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }
    remove(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
