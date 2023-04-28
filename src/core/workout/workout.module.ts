import { Module } from "@nestjs/common";
import { WorkoutService } from "./workout.service";
import { WorkoutController } from "./workout.controller";
import { Workout } from "./entity/workout.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [Workout],
            'idp_database',
        ),
    ],
    providers: [
        WorkoutService
    ],
    controllers: [
        WorkoutController
    ]
})
export class WorkoutModule {}