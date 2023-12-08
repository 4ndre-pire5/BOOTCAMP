import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AreasService } from './areas.service';
import { CreateAreaDto, UpdateAreaDto } from './dto/area.dto';

@Controller('areas')
export class AreasController {
  constructor(private readonly areasService: AreasService) {}

  @Post()
  async create(@Body() dataArea: CreateAreaDto) {
    return this.areasService.create(dataArea);
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
  async update(@Param('id') id: number, @Body() dataArea: UpdateAreaDto) {
    return this.areasService.update(+id, dataArea);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.areasService.delete(+id);
  }

}
