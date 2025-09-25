/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/DatabaseModule/database.module';
import { RegistrationModule } from './RegistrationModule/registration.module';

@Module({
  imports: [
    DatabaseModule,
    RegistrationModule,
  ],
  controllers: [],
  providers: [],
  exports: [RegistrationModule],
})
export class BusinessModule {}
