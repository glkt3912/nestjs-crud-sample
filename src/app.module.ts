import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionModule } from './champion/champion.module';

@Module({
  imports: [ChampionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
