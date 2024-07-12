import { Injectable } from '@nestjs/common';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';

@Injectable()
export class ChampionService {
  create(createChampionDto: CreateChampionDto) {
    return 'This action adds a new champion';
  }

  findAll() {
    return `This action returns all champion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} champion`;
  }

  update(id: number, updateChampionDto: UpdateChampionDto) {
    return `This action updates a #${id} champion`;
  }

  remove(id: number) {
    return `This action removes a #${id} champion`;
  }
}
