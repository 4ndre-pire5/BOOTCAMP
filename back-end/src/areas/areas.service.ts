import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAreaDto, UpdateAreaDto } from './dto/area.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AreasService {

  constructor(private prisma: PrismaService) {}

  async create(dataArea: CreateAreaDto) {
    const { localizacao, tamanho, ongId } = dataArea;
    return this.prisma.areas.create({
      data: {
        localizacao,
        tamanho,
        ong: {
          connect: {
            id: ongId
          }
        }
      }
    });
  }

  async findAll() {
    return this.prisma.areas.findMany();
  }

  async findOne(id: number) {
    const areaExists = await this.prisma.areas.findUnique({
      where: { id }
    });

    if(!areaExists) {
      // throw new Error("Area não existe no sistema !")
      throw new NotFoundException("Area não existe no sistema !")
    }
    return areaExists;

    // return await this.prisma.areas.findUnique({
    //   where: {
    //     id,
    //   }
    // })

  }

  async update(id: number, dataArea: UpdateAreaDto) {
    const areaExists = await this.prisma.areas.findUnique({
      where: { id }
    });

    if(!areaExists) {
      // throw new Error("Area não existe no sistema !")
      throw new NotFoundException("Area não existe no sistema !")
    }
    
    const { localizacao, tamanho } = dataArea;
    return this.prisma.areas.update({
      where: { id },
      data: {
        localizacao,
        tamanho,
      }
    });
  }

  async delete(id: number) {
    const areaExistss = await this.prisma.areas.findUnique({
      where: { id }
    })

    if(!areaExistss) {
      // throw new Error("ONG não existe no sistema !")
      throw new NotFoundException("Area não existe no sistema !")
    }

    return this.prisma.areas.delete({
      where: { id }
    });
  }

}
