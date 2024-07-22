import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { champion, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CrudService } from 'src/interfaces/crud.interfaces';

@Injectable()
export class ChampionService implements CrudService<champion> {
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

  search(name: string): Promise<champion[]> {
    try {
      return this.prisma.champion.findMany({
        where: {
          name: {
            equals: name,
          },
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  update(id: number, data: Prisma.championUpdateInput): Promise<champion> {
    try {
      const champion = this.prisma.champion.update({
        where: { id: id },
        data: { ...data },
      });
      return champion;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.prisma.champion.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new InternalServerErrorException(error.message);
      }
      throw error;
    }
  }

  async deleteAll(): Promise<void> {
    try {
      // 開発環境や導入段階でのみ使用想定。　もしくは論理削除想定
      await this.prisma.champion.deleteMany({});
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
