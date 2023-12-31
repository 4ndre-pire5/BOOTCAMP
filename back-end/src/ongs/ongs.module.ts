import { Module } from '@nestjs/common';
import { OngsService } from './ongs.service';
import { OngsController } from './ongs.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [OngsController],
  providers: [OngsService, PrismaService]
})
export class OngsModule {}
