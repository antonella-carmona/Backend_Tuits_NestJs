import { Module } from '@nestjs/common';


import { TuitsModule } from './modules/tuits/tuits.module';


//los módulos proporcionan una forma estructurada y organizada de encapsular y reutilizar componentes relacionados en una aplicación backend

@Module({
  imports: [TuitsModule],
 
})
export class AppModule {}
