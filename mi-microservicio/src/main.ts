import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1', // <--- IMPORTANTE: Pon esto exacto
        port: 3001,
      },
    },
  );
  await app.listen();
  console.log('Microservicio de Usuarios listo en 127.0.0.1:3001');
}
bootstrap();