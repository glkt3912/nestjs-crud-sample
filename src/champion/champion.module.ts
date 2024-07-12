import { Module } from '@nestjs/common';
import { ChampionService } from './champion.service';
import { ChampionController } from './champion.controller';

@Module({
  controllers: [ChampionController],
  providers: [ChampionService],
})
export class ChampionModule {}
