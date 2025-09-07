import { Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class TaskService {

    tasks: ITask[] = [];

    create(taskDTO: TaskDTO): ITask{
        const task = {
            id: uuidv4(),
            ...taskDTO
        };
        this.tasks.push(task);
        return task;
    }

    findAll(): ITask[]{
        return this.tasks;
    }

    findId(id: String): ITask | undefined{
        return this.tasks.find((t) => t.id === id);
    }

    update(id: string, taskDto: TaskDTO): ITask{
        const newTask = {id, ...taskDto};
        this.tasks = this.tasks.map((t) => t.id === id ? newTask: t);
        return newTask
    }

    delete(id: string): string{
        this.tasks = this.tasks.filter((t) => t.id !== id);
        return 'task deleted';
    }

}
