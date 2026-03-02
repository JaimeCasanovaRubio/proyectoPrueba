import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices'; // <--- Importar esto
import { HolaResolver } from './hola/hola.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    
    // AQUÍ CONECTAMOS CON EL OTRO PROYECTO
    ClientsModule.register([
       {
        name: 'USUARIOS_SERVICE',
        transport: Transport.TCP,
        options: { 
          host: '127.0.0.1', // <--- IMPORTANTE: Debe coincidir con el microservicio
          port: 3001 
        },
      },
    ]),
  ],
  providers: [HolaResolver],
})
export class AppModule {}