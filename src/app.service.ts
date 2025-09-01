import { Injectable } from '@nestjs/common';

@Injectable()

//Exporta los métodos que se llaman desde el controller
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
