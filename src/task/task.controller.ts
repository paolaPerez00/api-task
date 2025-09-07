import { Controller, Post, Get, Req, Put, Patch, Delete, Param, Query, Body } from '@nestjs/common';
import type { Request } from 'express';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {

    // @Post()
    // method(@Req() req: Request){
    //     return `method ${req.method}`;
    // }

    // @Post() //parametros
    // methodPostParam(@Param('id') id: number){
    //     return `${id}`;
    // }
    // @Post() //parametros
    // methodPostQuery(
    //     @Query('id') id: number,
    //     @Query('description') description: string,
    //     @Query('isdone') isdone: boolean
    // ){
    //     return {id, description, isdone};
    // }

    // @Post()
    // methodPostQuery(@Body() body: any){
    //     return { body }
    // }

    constructor( private readonly taskService: TaskService){

    }

    @Post()
    create(@Body() taskDTO: TaskDTO){
        return this.taskService.create(taskDTO);
    }

    @Get()
    findAll(){
        return this.taskService.findAll();
    }

    @Get(':id')
    findId(@Param('id') id: string){
        return this.taskService.findId(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() taskDto: TaskDTO){
        return this.taskService.update(id, taskDto);
    }

    @Patch()
    methodPatch(@Req() req: Request){
        return `method ${req.method}`;
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.taskService.delete(id);
    }
      

}
