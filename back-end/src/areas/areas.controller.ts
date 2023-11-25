import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AreasService } from './areas.service';
import { AreaDto } from './dto/area.dto';
import { query } from 'express';

@Controller('areas')
export class AreasController {
  constructor(private readonly areasService: AreasService) {}

  @Post()
  create(@Body() data: AreaDto) {
    return this.areasService.create(data);
  }

  @Get()
  async findAll() {
    return this.areasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.areasService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: AreaDto) {
    return this.areasService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.areasService.delete(+id);
  }

}
