import { TelegramUpdate } from './telegram.update';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { sessionMiddleware } from './middleware/session.middleware';
import { BusinessModule } from 'src/BusinessModule/business.module';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        token: configService.get<string>('token') || '',
        middlewares: [sessionMiddleware],
      }),
      inject: [ConfigService],
    }),
    BusinessModule,
  ],
  providers: [TelegramUpdate],
})
export class TelegramModule {}
