import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { champion, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChampionService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.championCreateInput): Promise<champion> {
    return this.prisma.champion.create({ data });
  }

  findAll(): Promise<champion[]> {
    return this.prisma.champion.findMany();
  }

  findOne(id: number) {
    return this.prisma.champion.findUnique({ where: { id } });
  }

  search(keyword: string): Promise<champion[]> {
    try {
      return this.prisma.champion.findMany({
        where: {
          name: {
            contains: keyword,
          },
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  update(id: number, data: Prisma.championUpdateInput): Promise<champion> {
    return this.prisma.champion.update({
      where: { id: id },
      data,
    });
  }

  delete(id: number): Promise<champion> {
    return this.prisma.champion.delete({ where: { id: id } });
  }
}
