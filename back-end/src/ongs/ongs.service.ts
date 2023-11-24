import { Injectable } from '@nestjs/common';
import { OngDto } from './dto/ong.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OngsService {

  constructor(private prisma: PrismaService) {}

  async create(data: OngDto) {
    const ongExists = await this.prisma.oNGS.findFirst({
      where: {
        nome: data.nome
      }
    })

    if(ongExists) {
      throw new Error("Ong já existe no sistema")
    }

    const ong = await this.prisma.oNGS.create({
      data,
    })
    return ong;
  }

  findAll() {
    return this.prisma.oNGS.findMany();
  }

  async findOne(cnpj: string) {
    return await this.prisma.oNGS.findUnique({
      where: {
        cnpj,
      }
    })
  }

  async update(cnpj: string, data: OngDto) {
    const ongExists = await this.prisma.oNGS.findUnique({
      where: {
        cnpj,
      }
    })

    if(!ongExists) {
      throw new Error("ONG não existe no sistema !")
    }

    return await this.prisma.oNGS.update({
      data,
      where: {
        cnpj,
      }
    })
  }

  async delete(cnpj: string) {
    const ongExists = await this.prisma.oNGS.findUnique({
      where: {
        cnpj,
      }
    })

    if(!ongExists) {
      throw new Error("ONG não existe no sistema !")
    }

    return await this.prisma.oNGS.delete({
      where: {
        cnpj,
      }
    })
  }

}
