import { Module } from '@nestjs/common';
import { ChampionService } from './champion.service';
import { ChampionController } from './champion.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ChampionController],
  providers: [ChampionService, PrismaService],
})
export class ChampionModule {}
