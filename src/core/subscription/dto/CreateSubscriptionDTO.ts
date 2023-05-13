import { IsNotEmpty } from 'class-validator';

export class CreateSubscriptionDTO {
    @IsNotEmpty()
    gym_id: number;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    currency: string

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    start_date: string;

    @IsNotEmpty()
    end_date: string;
}