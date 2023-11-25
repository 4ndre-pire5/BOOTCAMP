import { Injectable } from '@nestjs/common';
import { AreaDto } from './dto/area.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AreasService {

  constructor(private prisma: PrismaService) {}

  async create(data: AreaDto) {
    const area = await this.prisma.areas.create({
      data,
    })
    return area;
  }

  findAll() {
    return this.prisma.areas.findMany();
  }

  async findOne(id: number) {
    const areaExists = await this.prisma.areas.findUnique({
      where: {
        id,
      }
    })

    if(!areaExists) {
      throw new Error("Area não existe no sistema !")
    }

    return await this.prisma.areas.findUnique({
      where: {
        id,
      }
    })

  }

  async update(id: number, data: AreaDto) {
    const areaExists = await this.prisma.areas.findUnique({
      where: {
        id,
      }
    })

    if(!areaExists) {
      throw new Error("Area não existe no sistema !")
    }

    return await this.prisma.areas.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id: number) {
    const areaExistss = await this.prisma.areas.findUnique({
      where: {
        id,
      }
    })

    if(!areaExistss) {
      throw new Error("ONG não existe no sistema !")
    }

    return await this.prisma.areas.delete({
      where: {
        id,
      }
    })
  }

}
