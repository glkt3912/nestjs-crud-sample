import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import { ChampionService } from './champion.service';
import { champion, Prisma } from '@prisma/client';

@Controller('champion')
export class ChampionController {
  constructor(private readonly championService: ChampionService) {}

  @Post()
  async create(@Body() data: Prisma.championCreateInput): Promise<champion> {
    return this.championService.create(data);
  }

  @Get()
  async findAll(): Promise<champion[]> {
    return this.championService.findAll();
  }
  // キーワードに基づいてChamaionを検索する
  @Get('search')
  async search(@Query('keyword') keyword: string) {
    return await this.championService.search(keyword);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<champion> {
    return this.championService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Prisma.championUpdateInput,
  ) {
    return this.championService.update(+id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<champion> {
    return this.championService.delete(+id);
  }
}
