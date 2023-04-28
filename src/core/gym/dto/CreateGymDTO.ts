import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateGymDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    email: string;

    @IsOptional()
    open_time: string;

    @IsOptional()
    close_time: string;

    @IsNotEmpty()
    capacity: number;
}
