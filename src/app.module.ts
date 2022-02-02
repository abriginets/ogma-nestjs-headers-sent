import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OgmaInterceptor, OgmaModule } from '@ogma/nestjs-module';
import { ExpressParser } from '@ogma/platform-express';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    OgmaModule.forRoot({
      service: {
        color: true,
        json: true,
        application: 'NestJS',
      },
      interceptor: {
        http: ExpressParser,
        ws: false,
        gql: false,
        rpc: false,
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: OgmaInterceptor,
    },
  ],
})
export class AppModule {}
