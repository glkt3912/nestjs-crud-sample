import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionModule } from './champion/champion.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ChampionModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
