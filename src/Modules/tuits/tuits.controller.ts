import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';
import { CreateTuitDto, UpdateTuitDto } from './dto';

@Controller('tuits') //decorador con argumento
//Sirve para añadir anotaciones o metadatos para cambiar el comportamiento de una clase 
export class TuitsController {
    //el constructor va a recibir nuestro tuits service como proveedor
    constructor(private readonly tuitService: TuitsService){

    }


    @Get()
    getTuits(@Query() filterQuery): Tuit[] {
        const {searchTerm, orderBy} = filterQuery;
        return this.tuitService.getTuits();
    }
    
    //para obtener los parametros que envia el cliente
    @Get(`:id`)
    getTuit(@Param(`id`) id: string): Tuit { 
      return this.tuitService.getTuit(id);
    }
    
    //esta fn va a recibir a travez del body con dicho decorador(post), la info que le enviamos
    @Post()
    createTuit(@Body() message: CreateTuitDto) : void{
     return this.tuitService.createTuit(message);
    }

    @Patch(`:id`)
    updateTuit(@Param(`id`) id: string, @Body() tuit: UpdateTuitDto) : Tuit{
      return this.tuitService.updateTuit(id, tuit)
    }

    @Delete(`:id`)
    removeTuit(@Param(`id`) id: string) : void{
      return this.tuitService.removeTuit(id)
    }
}
