import { Body, Controller, Delete, Get, Post, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { title } from 'process';
import { CreateTask } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService : TasksService) { }
    
    @Get()
    findAll(): Task[] {
        return this.tasksService.findAll();
    }

    @Post()
    create(@Body() createTask: CreateTask): Task {
        // console.log('body', body);
        return this.tasksService.create(createTask);

    }
    @Delete('/:id')
    remove(@Param('id') id: string):void {
        this.tasksService.remove(id);
    }

}
