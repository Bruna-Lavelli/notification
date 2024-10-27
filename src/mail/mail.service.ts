import { Injectable } from '@nestjs/common';
import { Mail, mailType } from '@prisma/client';
import { PrismaSerive } from 'src/prisma.service';
import { DataMessage } from './types/message';
import * as nodemailer from 'nodemailer';



@Injectable()
export class MailService {
    private transporter: nodemailer.Transporter;
    
    constructor(private prisma: PrismaSerive) {}

    async getMailByIdUser(idUser: string): Promise<Mail[] | null> {
        return await this.prisma.mail.findMany({
            where: { idUser },
        });
    }

    async sendMail(content: DataMessage, type:mailType) {
        console.log(`sendMail - content = ${content} - type = ${type}`)
        //ToDo: implements method - Tentei implementar o Nodemailer, mas sem sucesso ):
    }

    async persistNotification (content: DataMessage, type: mailType) {
        const data = {
            idUser: content.idUser,
            mailDestination: this.getDestination(content.idUser),
            mailContent: this.makeContent(Number(content.orderNumber), Number(content.orderValue)),
            mailType: type,

        };

        await this.prisma.mail.create({data: { ...data}});
    }

    getDestination(idUser: string) {
        switch (idUser) {
            case '10':
                return 'user@test.com.br'
            default:
                return 'default@teste.com.br'
        }
    }

    makeContent(orderNumber:number, orderValue: number) {
        return `Número do pedido: ${orderNumber} - Valor do pedido: ${orderValue}`;
    }
};

