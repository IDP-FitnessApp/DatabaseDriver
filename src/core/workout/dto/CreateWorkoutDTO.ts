import { IsNotEmpty } from 'class-validator';

export class CreateWorkoutDTO {
    @IsNotEmpty()
    subscription_id: number;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    difficulty: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    duration_minutes: number;
}
