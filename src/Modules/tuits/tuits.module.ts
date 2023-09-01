import { Module } from '@nestjs/common';
import { TuitsController } from './tuits.controller';
import { TuitsService } from './tuits.service';

//mira yo soy un modulo y tengo mis propios componentes, que es un servicio y controlador. 

@Module({
    controllers: [TuitsController],
    providers:[TuitsService]
})
export class TuitsModule {}

