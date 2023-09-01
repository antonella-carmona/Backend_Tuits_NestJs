//Estas líneas de código son escritas en TypeScript y utilizan el framework Nest.js 
//para crear y levantar una aplicación web
//_____________________________________________________________________________________
import {ValidationPipe} from "@nestjs/common";
//Aquí estamos importando la función NestFactory desde el módulo @nestjs/core. Esta función se utiliza para crear instancias de la aplicación Nest.js.
import { NestFactory } from '@nestjs/core';
//importa el módulo principal de la aplicación, que se llama AppModule. Los módulos en Nest.js son una forma de organizar y estructurar diferentes partes de la aplicación.
import { AppModule } from './app.module';






//ACA SE ESTA INICIALIZANDO NUESTRA APLICACION Y LEVANTANDO EN EL PUERTO
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform:true,
    whitelist: true,
    forbidNonWhitelisted: true
  }))
  await app.listen(3000);
}
bootstrap();

