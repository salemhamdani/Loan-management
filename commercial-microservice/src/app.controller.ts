import { Controller, Get } from '@nestjs/common/decorators';
import { EventPattern } from '@nestjs/microservices/decorators';
import { AppService } from './app.service';
import { LoanDocument } from '../../backend/src/models/loan-document.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_document')
  receiveDocument(loadDocument: LoanDocument) {
    console.log('hello i am in commercial microservice');
    return this.appService.handleDocument(loadDocument);
  }
}
