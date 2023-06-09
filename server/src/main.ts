import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

// nest generate resource category --no-spec
// nest g resource transaction --no-spec

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.enableCors()
  await app.listen(3001)
}
bootstrap()
