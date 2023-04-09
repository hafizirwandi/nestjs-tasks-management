import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { title } from 'process';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService : TasksService) { }
    
    @Get()
    findAll(): Task[] {
        return this.tasksService.findAll();
    }

    @Post()
    create(
        @Body('title') title: string,
        @Body('description') desription: string
    ): Task {
        // console.log('body', body);
        return this.tasksService.create(title, desription);

    }


}
