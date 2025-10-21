import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Large body size support
  app.use(bodyParser.json({ limit: '200mb' }));
  app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

  // Global Validation Pipe (only set once)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // auto-transform DTOs (recommended)
    }),
  );

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Auth API')
    .setDescription('API DOCUMENTATION')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Expose raw OpenAPI JSON at /api-json
  app.getHttpAdapter().get('/api-json', (req, res) => {
    res.json(document);
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
