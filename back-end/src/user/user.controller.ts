import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { UserDto } from './dto/dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() data: UserDto) {
    return this.userService.create(data);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    return await this.userService.findByEmail(email);
  }

  @Put(':email')
  async update(@Param('email') email: string, @Body() data: UserDto) {
    return this.userService.update(email, data);
  }

  @Delete(':email')
  async delete(@Param('email') email: string) {
    return this.userService.delete(email);
  }


}
