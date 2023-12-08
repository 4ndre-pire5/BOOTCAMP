import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOngDto, UpdateOngDto } from './dto/ong.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OngsService {

  constructor(private prisma: PrismaService) {}

  async create(dataOng: CreateOngDto) {
    const ongExists = await this.prisma.oNGS.findFirst({
      where: { nome: dataOng.nome }
    })

    if(ongExists) {
      // throw new Error("Ong já existe no sistema")
      throw new NotFoundException('ONG já existe no sistema')

    }

    const ong = await this.prisma.oNGS.create({
      data: dataOng,
    })
    return ong;
  }

  async findAll() {
    return this.prisma.oNGS.findMany({
      include: { areas: true }
    });

  }

  async findOne(cnpj: string) {
    const ongExists = await this.prisma.oNGS.findUnique({
      where: { cnpj },
      include: { areas: true }
    })

    if(!ongExists) {
      // throw new Error("ONG não existe no sistema !")
      throw new NotFoundException('ONG não existe no sistema')
    }

    return ongExists;

    // return await this.prisma.oNGS.findUnique({
    //   where: {
    //     cnpj,
    //   }
    // })

  }

  async update(cnpj: string, dataOng: UpdateOngDto) {
    const ongExists = await this.prisma.oNGS.findUnique({
      where: { cnpj }
    })

    if(!ongExists) {
      throw new Error("ONG não existe no sistema !")
    }

    const { nome, cidade } = dataOng;
    return this.prisma.oNGS.update({
      where: { cnpj },
      data: { nome, cidade },
    })
  }

  async delete(cnpj: string) {
    const ongExists = await this.prisma.oNGS.findUnique({
      where: { cnpj }
    })

    if(!ongExists) {
      // throw new Error("ONG não existe no sistema !")
      throw new NotFoundException('ONG não existe no sistema')
    }

    return await this.prisma.oNGS.delete({
      where: { cnpj }
    })
  }

}
