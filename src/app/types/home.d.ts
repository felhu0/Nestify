type HomeCategory =
    | 'Accessible'
    | 'Spacious'
    | 'Apartment'
    | 'Pet friendly'
    | 'Close to nature'
    | 'Near water'


export type HomeType = {
    id: string
    name: string
    accessible: boolean
    spacious: boolean
    apartment: boolean
    petFriendly: boolean
    closeToNature: boolean
    nearWater: boolean
    imageUrl: string[];
    host: string;
    description: string;
    amenities: string[];
    pricePerNight: number;
}