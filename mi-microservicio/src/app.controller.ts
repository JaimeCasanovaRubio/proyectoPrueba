import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  
  // Esta etiqueta le dice al microservicio: "si alguien te pregunta por 'saludo_usuario', responde esto"
  @MessagePattern('saludo_usuario')
  enviarSaludo(nombre: string) {
    return `¡Hola ${nombre}! Este mensaje viene del microservicio por el puerto 3001.`;
  }
}