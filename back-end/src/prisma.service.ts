<<<<<<< HEAD
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
=======
import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{

    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication){
        process.on('beforeExit', async () => {
            await app.close();
        });
    }

}
>>>>>>> 2f4a59a6da5d0dd2816311fb539b5dbe6d19ab48
