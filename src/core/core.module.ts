import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { GymModule } from "./gym/gym.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { WorkoutModule } from "./workout/workout.module";

@Module({
    imports: [
        UserModule,
        GymModule,
        SubscriptionModule,
        WorkoutModule
    ]
})
export class CoreModule {}