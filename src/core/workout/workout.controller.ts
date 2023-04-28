import { Body, Controller, Post } from "@nestjs/common";
import { WorkoutService } from "./workout.service";
import { CreateWorkoutDTO } from "./dto/CreateWorkoutDTO";

@Controller('workout')
export class WorkoutController {
    constructor(
        private readonly workoutService: WorkoutService
    ) {}

    @Post('create')
    async createWorkout(@Body() workoutData: CreateWorkoutDTO) {
        return this.workoutService.createWorkout(workoutData);
    }
}