export type CheckoutType = {
    sessionId: string;
    reservationId: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    totalAmount: number;
    userId: string;
    status: string;
    createdAt: Date;
}

