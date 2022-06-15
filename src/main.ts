import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('Main BFF');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<string>('port');
  const appUrl = config.get<string>('appUrl');

  await app.listen(port, () =>
    logger.log(`server running in: ${appUrl}:${port}`),
  );
}
bootstrap();
