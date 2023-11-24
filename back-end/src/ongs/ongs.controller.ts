import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { OngsService } from './ongs.service';
import { OngDto } from './dto/ong.dto';

@Controller('ongs')
export class OngsController {
  constructor(private readonly ongsService: OngsService) {}

  @Post()
  create(@Body() data: OngDto) {
    return this.ongsService.create(data);
  }

  @Get()
  async findAll() {
    return this.ongsService.findAll();
  }

  @Get(':cnpj')
  async findOne(@Param('cnpj') cnpj: string) {
    return this.ongsService.findOne(cnpj);
  }

  @Put(':cnpj')
  async update(@Param('cnpj') cnpj: string, @Body() data: OngDto) {
    return this.ongsService.update(cnpj, data);
  }

  @Delete(':cnpj')
  async delete(@Param('cnpj') cnpj: string) {
    return this.ongsService.delete(cnpj);
  }

}
