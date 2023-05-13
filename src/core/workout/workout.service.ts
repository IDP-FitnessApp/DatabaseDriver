import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Workout } from "./entity/workout.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateWorkoutDTO } from "./dto/CreateWorkoutDTO";

@Injectable()
export class WorkoutService {
    constructor(
        @InjectRepository(Workout, 'idp_database')
        private readonly workoutRepository: Repository<Workout>,
    ) {}

    async createWorkout(workoutData: CreateWorkoutDTO) {
        try {
            const newGym = await this.workoutRepository.save(this.workoutRepository.create({
                subscription_id: workoutData.subscription_id,
                name: workoutData.name,
                description: workoutData.description,
                difficulty: workoutData.difficulty,
                type: workoutData.type,
                duration_minutes: workoutData.duration_minutes
            }));
            return newGym;
        }
        catch(error) {
            throw new HttpException('create_gym_failed', HttpStatus.CONFLICT);
        }
    }

    async getWorkoutsOfSubscription(subscriptionId) {
        return await this.workoutRepository.find({
            where: {
                subscription_id: subscriptionId
            }
        });
    }
}