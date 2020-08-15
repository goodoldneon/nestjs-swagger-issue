import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initSwagger(app);
  await app.listen(3100);
}
bootstrap();

function initSwagger(app: INestApplication) {
  const swaggerConfig = new DocumentBuilder().setTitle('Data Service').build();

  // Create Swagger document (with HTTP routes).
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  // Service Swagger.
  SwaggerModule.setup('docz', app, swaggerDocument);
}
