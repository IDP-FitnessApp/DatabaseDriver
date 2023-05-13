import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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

    @Get('subscription/:subscription_id')
    async getWorkoutsOfSubscription(@Param('subscription_id') subscription_id: string) {
        return this.workoutService.getWorkoutsOfSubscription(subscription_id);
    }
}