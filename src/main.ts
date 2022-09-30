import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { EntityNotFoundExceptionFilter } from './common/filters/entity-not-found-exception.filter';
import { configuration } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  const logger = app.get(Logger);
  app.useLogger(logger);

  app.useGlobalFilters(new EntityNotFoundExceptionFilter());

  let config = await configuration();
  await app.listen(config.appPort as string | number);
}
bootstrap();
