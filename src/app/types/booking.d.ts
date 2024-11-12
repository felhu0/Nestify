export type CheckoutType = {
    sessionId: string;
    reservationId: string;
    homeName: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    totalAmount: number;
    userId: string;
    status: string;
    createdAt: Date;
    homeImage?: string;
}

