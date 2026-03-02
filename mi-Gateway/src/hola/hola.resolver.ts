import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Resolver()
export class HolaResolver {
  
  // Aquí le decimos al Gateway: "Ten listo el teléfono para llamar a USUARIOS_SERVICE"
  constructor(
    @Inject('USUARIOS_SERVICE') private client: ClientProxy,
  ) {}

  @Query(() => String)
  async pedirSaludoAlMicro(@Args("nombre") nombre: string) {
    // 1. Enviamos un mensaje llamado 'saludo_usuario'
    // 2. Le mandamos el nombre 'Jaime'
    // 3. 'await' significa: "espera a que el microservicio me responda"
    const respuesta = await firstValueFrom(
      this.client.send('saludo_usuario', nombre)
    );
    
    return respuesta;
  }
}