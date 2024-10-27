import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { PrismaSerive } from 'src/prisma.service';

@Module({
  controllers: [MailController],
  providers: [MailService, PrismaSerive],
})
export class MailModule {}
