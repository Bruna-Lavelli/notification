export type DataMessage = {
    orderNumber(orderNumber: any, orderValue: number): unknown;
    id: string;
    idUser: string;
    orderValue: number;
    paymentConfirmation: boolean;
};