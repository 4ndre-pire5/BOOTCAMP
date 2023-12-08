import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { OngsService } from './ongs.service';
import { CreateOngDto, UpdateOngDto } from './dto/ong.dto';

@Controller('ongs')
export class OngsController {
  constructor(private readonly ongsService: OngsService) {}

  @Post()
  create(@Body() dataOng: CreateOngDto) {
    return this.ongsService.create(dataOng);
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
  async update(@Param('cnpj') cnpj: string, @Body() dataOng: UpdateOngDto) {
    return this.ongsService.update(cnpj, dataOng);
  }

  @Delete(':cnpj')
  async delete(@Param('cnpj') cnpj: string) {
    return this.ongsService.delete(cnpj);
  }

}
