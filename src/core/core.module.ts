import { Module } from "@nestjs/common";
import { GymModule } from "./gym/gym.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { WorkoutModule } from "./workout/workout.module";

@Module({
    imports: [
        GymModule,
        SubscriptionModule,
        WorkoutModule
    ]
})
export class CoreModule {}