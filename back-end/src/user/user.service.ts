import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './dto/dto/user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  async create(dto: UserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (user) throw new ConflictException('email duplicated');

    const newUser = await this.prisma.user.create({
      data: {
        ...dto,
        password: await hash(dto.password, 10),
      },
    });

    const { password, ...result } = newUser;
    return result;
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findByEmail(email: string) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email,
      }
    })

    if(!userExists) {
      throw new Error("Usuario não existe no sistema !")
    }

    return await this.prisma.user.findUnique({
      where: {
        email,
      }
    })
  }

  async update(email: string, data: UserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email,
      }
    })

    if(!userExists) {
      throw new Error("Usuario não existe no sistema !")
    }

    return await this.prisma.user.update({
      data,
      where: {
        email,
      }
    })
  }

    async delete(email: string) {
      const userExists = await this.prisma.user.findUnique({
        where: {
          email,
        }
      })
  
      if(!userExists) {
        throw new Error("Usuario não existe no sistema !")
      }
  
      return await this.prisma.user.delete({
        where: {
          email,
        }
      })
    }

}
